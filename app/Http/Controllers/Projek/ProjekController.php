<?php

namespace App\Http\Controllers\Projek;

use App\Exports\ExportProjek;
use App\Exports\ExportProjekMaster;
use App\Http\Controllers\Controller;
use App\Imports\ImportProjek;
use App\Models\Angkatan;
use App\Models\Jurusan;
use App\Models\Penugasan;
use App\Models\Projek;
use App\Models\ProjekJurusan;
use App\Models\Tugas;
use App\Models\Versi;
use Illuminate\Http\Request;
use App\Models\Siswa;
use Illuminate\Support\Facades\Auth;
use App\Models\PenilaianProjek;
use App\Models\User;
use Maatwebsite\Excel\Facades\Excel;

class ProjekController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $projek = Projek::with(["projek_jurusan.jurusan", "penanggung_jawab"]);

        if ($request->has("byRole")) {
            if ($request->byRole == 1) {
                $superadmin = Auth::user()->hasAnyRole(["Super Admin"]);
                if (!$superadmin) {
                    $projek = $projek->whereHas("projek_jurusan.jurusan.ub_jurusan", function ($q) {
                        $q->where("id_pengguna", Auth::user()->id);
                    });
                }
            }
            return response()->json($projek->get());
        }

        if ($request->has("id_jurusan")) {
            $projek = $projek->with("projekjurusan", function ($e) use ($request) {
                $e->whereIn("id_jurusan", $request->id_jurusan);
            })->get();
            return response()->json($projek);
        }

        if ($request->has("id_siswa")) {
            $id_tugas = Penugasan::where("id_siswa", $request->id_siswa)->get()->pluck("id_tugas")->toArray();
            $id_projek = Tugas::whereIn("id", $id_tugas)->get()->pluck("id_projek");
            $projek = $projek->whereIn("id", $id_projek);
        }
        $projek = $projek->get();
        foreach ($projek as $i => $prjk) {
            $projek[$i]->image = Versi::whereIn("id_tugas", Tugas::where("id_projek", $prjk->id)->get()->pluck("id")->toArray())->get()->pluck("lampiran");
        }
        return response()->json($projek);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->has("import")) {
            if ($request->import == 1) {
                return $this->importFromExcel($request);
            }
        }
        if ($request->has("id")) {
            return $this->update($request, $request->id);
        }
        $projek = $request->input();
        $projek["id_pembuat"] = Auth::user()->id;
        $newprojek  = $projek;
        unset($newprojek["id_jurusan"]);
        $dataprojek = Projek::create($newprojek);


        //addProjekHasJurusan;
        foreach ($projek["id_jurusan"] as $prj) {
            ProjekJurusan::create([
                "id_projek" => $dataprojek->id,
                "id_jurusan" => $prj
            ]);
        }
        return response()->json($projek);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $req, $id)
    {
        $projek = Projek::with("penanggung_jawab")->with("projek_jurusan.jurusan")->find($id);
        if ($req->has("download")) {
            if ($req->download == 1) {
                ob_end_clean();
                ob_start();
                return (new ExportProjekMaster($id))->download($projek->nama . ".xlsx");
            }
        }
        if ($req->has("partisipan")) {
            if ($req->partisipan == 1) {
                $partisipan = Siswa::with(["angkatan", "jurusan"])->whereHas("penugasan", function ($q) use ($id) {
                    $q->whereHas("tugas", function ($q) use ($id) {
                        $q->where("id_projek", $id);
                    });
                })->get();
                $partisipan = $partisipan->map(function ($q) use ($id) {
                    $q->kelasDanJurusan = $q->angkatan->kelas() . " " . $q->jurusan->jurusan;
                    // $hasPenilaian = PenilaianProjek::where("id_penilai", Auth::user()->id)->where("id_projek", $id)->where("id_siswa", $q->id);
                    //$q->penilaianProjek = 
                    return $q;
                });
                $projek->partisipan = $partisipan;
            }
        }
        return response()->json($projek);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $projek = Projek::find($id);
        $projek->nama = $request->nama;
        $projek->deskripsi = $request->deskripsi;
        $projek->tanggal_awal = $request->tanggal_awal;
        $projek->tanggal_akhir = $request->tanggal_akhir;
        $projek->id_penanggung_jawab = $request->id_penanggung_jawab;
        $projek->klien = $request->klien;
        $projek->jenis_projek = $request->jenis_projek;
        $projek->status = $request->status;
        $projek->lokasi_projek = $request->lokasi_projek;
        $projek->save();

        //clear projekJurusan
        ProjekJurusan::where("id_projek", $id)->delete();
        foreach ($request->id_jurusan as $prj) {
            ProjekJurusan::create([
                "id_projek" => $projek->id,
                "id_jurusan" => $prj
            ]);
        }
        return 0;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $projek = Projek::find($id);
        $projek->delete();
        return response()->json(["keterangan" => "berhasil"]);
    }

    public function importFromExcel(Request $req)
    {
        $file = $req->file('file-excel');

        $nama_file = rand() . $file->getClientOriginalName();

        // upload ke folder file_siswa di dalam folder public
        $file->move(public_path("/projekdata"), $nama_file);
        $data = Excel::toArray(new ImportProjek, public_path("/projekdata/" . $nama_file));
        // dd($data);

        //CHECK APAKAH Angkatan tersedia
        $approveAngkatan = true;
        //dd($data);

        foreach ($data[9] as $key => $value) {
            if ($key > 0) {
                $countAngkatan = Angkatan::find($value[0]);
                if (!$countAngkatan) {
                    $approveAngkatan = false;
                    $let = [];
                    foreach ($value as $j => $vl) {
                        echo $j;
                        $let[$data[9][0][$j]] = $vl;
                    }
                    $angkatan = Angkatan::create($let);
                } else {
                }
            }
        }

        $approveJurusan = true;

        foreach ($data[8] as $key => $value) {
            if ($key > 0) {
                $countJurusan = Jurusan::find($value[0]);
                if (!$countJurusan) {
                    $approveJurusan = false;
                    $let = [];
                    foreach ($value as $j => $vl) {
                        echo $j;
                        $let[$data[8][0][$j]] = $vl;
                    }
                    // $jurusan = Jurusan::create($let);
                } else {
                }
            }
        }

        foreach ($data[7] as $key => $value) {

            if ($key > 0) {
                $countSiswa = Siswa::find($value[0]) or Siswa::where("nama", "LIKE", "%" . $value[2] . "%")->first();

                if (!$countSiswa) {
                    $approveSiswa = false;
                    $let = [];
                    foreach ($value as $j => $vl) {
                        echo $j;
                        $let[$data[7][0][$j]] = $vl;
                    }

                    $siswa = Siswa::create($let);
                } else {
                    // echo $countSiswa;
                }
            }
        }

        $penanggungJawab = null;
        foreach ($data[10] as $key => $value) {

            if ($key > 0) {
                $countPenanggungJawab = User::find($value[0]) or User::where("name", "LIKE", "%" . $value[2] . "%")->first();
                print_r($countPenanggungJawab);
                if (!$countPenanggungJawab) {
                    $approvePenanggungJawab = false;
                    $let = [];
                    foreach ($value as $j => $vl) {
                        echo $j;
                        $let[$data[10][0][$j]] = $vl;
                    }
                    dd($let);
                    $user = User::create($let);
                } else {
                    echo $countPenanggungJawab;
                    $penanggungJawab = $countPenanggungJawab;
                }
            }
        }

        //TambahProjek
        //Projek
    }
}
