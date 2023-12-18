<?php

namespace App\Http\Controllers\Siswa;

use App\Http\Controllers\Controller;
use App\Models\Jurusan;
use App\Models\Penugasan;
use App\Models\Projek;
use App\Models\ProjekJurusan;
use App\Models\Siswa;
use Illuminate\Http\Request;
use App\Models\Tugas;
use Illuminate\Support\Facades\Hash;

class SiswaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $req)
    {
        $siswa = Siswa::with(["angkatan", "jurusan"]);


        if ($req->has("filter")) {
            if ($req->filter == 1) {
                return $this->filter($req);
            }
        }

        if ($req->has("getClassMember")) {
            if ($req->getClassMember == 1) {
                $siswa = Siswa::with(["angkatan", "jurusan"])->where("id_jurusan", $req->id_jurusan)->where("id_angkatan", $req->id_angkatan)->get();
                $siswa = $siswa->map(function ($q) {
                    $q->kelasDanJurusan =  $q->angkatan->kelas() . " " . $q->jurusan->jurusan;
                    return $q;
                });
                return response()->json($siswa);
            }
        }



        if ($req->has("byQuery")) {
            if ($req->has("id_tugas")) {
                $id_projek = Tugas::find($req->id_tugas)->id_projek;
            }


            if ($req->has("id_tugas")) {
                $siswa = $siswa->with("penugasan", function ($q) use ($req) {
                    $q->where("id_tugas", $req->id_tugas);
                })->whereIn("id_jurusan", $req->id_jurusan)->whereHas("penugasan", function ($q) use ($req) {
                    $q->where("id_tugas", $req->id_tugas);
                });
            }

            if ($req->filled("nama")) {
                $siswa = $siswa->orWhere("nama", "LIKE", "%" . $req->nama . "%");
            }


            $siswa = $siswa->whereHas("angkatan", function ($q) {
                $q->where("dari", "<", date("Y-m-d"))->where("sampai", ">", date("Y-m-d"));
            });


            if (gettype($req->id_jurusan) == "array") {
                $siswa =
                    $siswa->whereIn("id_jurusan", $req->id_jurusan);
            }



            if ($req->has("id_angkatan")) {
                if (gettype($req->id_angkatan) != "array") {
                    $siswa = $siswa->where("id_angkatan", $req->id_angkatan);
                } else {
                    $siswa = $siswa->whereIn("id_angkatan", $req->id_angkatan);
                }
            }

            $siswa = $siswa->paginate(20)->map(function ($q) {
                $sws = $q;
                $sws->ikut_penugasan = $q->penugasan->count() > 0 ? true : false;
                $sws->kelasDanJurusan =  $q->angkatan->kelas() . " " . $q->jurusan->jurusan;
                return $sws;
            });

            return response()->json($siswa);
        }

        $siswa = $siswa->paginate(50)->map(function ($q) {
            $sws = $q;
            $sws->ikut_penugasan = $q->penugasan->count() > 0 ? true : false;
            $sws->kelasDanJurusan =  $q->angkatan->kelas() . " " . $q->jurusan->jurusan;
            return $sws;
        });
        return response()->json($siswa);
    }

    public function filter(Request $req)
    {
        $siswa = new Siswa();






        if ($req->filled("id_jurusan")) {
            $siswa =
                $siswa->where("id_jurusan", $req->id_jurusan);
        }



        if ($req->filled("id_angkatan")) {
            $siswa = $siswa->where("id_angkatan", $req->id_angkatan);
        }

        if ($req->filled("nama")) {
            $siswa = $siswa->where("nama", "LIKE", "%" . $req->nama . "%");
        }


        $siswa = $siswa->paginate(20)->map(function ($q) {
            $sws = $q;
            $sws->ikut_penugasan = $q->penugasan->count() > 0 ? true : false;
            $sws->kelasDanJurusan =  $q->angkatan->kelas() . " " . $q->jurusan->jurusan;
            return $sws;
        });

        return response()->json($siswa);
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
        if (!$request->id != null) {
            $siswa = new Siswa();
            $siswaCount = Siswa::where("nis", $request->nis)->orWhere("email", $request->email)->get()->count();
            if ($siswaCount < 1) {
                $siswa->nama = $request->nama;
                $siswa->nis = $request->nis;
                $siswa->email = $request->email;
                $siswa->password = Hash::make($request->password);
                $siswa->id_angkatan = $request->id_angkatan;
                $siswa->id_jurusan = $request->id_jurusan;
                $siswa->jk = $request->jk;
                $imageName = time() . '_' . $request->nama . "_" . $request->id_angkatan . "_" . $request->id_jurusan . ".png";
                $siswa->fotoprofil = $imageName;
                $siswa->save();
                $request->fotoprofil->move(public_path('img/profilsiswa'), $imageName);

                return response()->json(["keterangan" => "berhasil", "data" => $siswa]);
            } else {
                return response()->json(["keterangan" => "gagal"]);
            }
        } else {
            return $this->update($request, $request->id);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $req, $id)
    {

        if ($req->has("withProjek")) {
            if ($req->withProjek == 1) {
                $id_tugas = Penugasan::where("id_siswa", $id)->pluck("id_tugas")->toArray();
                $id_projek = Tugas::whereIn("id", $id_tugas)->pluck("id_projek")->toArray();
                $projek = Projek::whereIn("id", $id_projek)->get();

                $projek = $projek->map(function ($e) use ($id_projek, $id) {
                    $tugasCount = Penugasan::where("id_siswa", $id)->whereHas("tugas", function ($q) use ($id_projek) {
                        $q->where("id_projek", $id_projek);
                    })->get()->count();
                    $tugas_selesai = Penugasan::where("id_siswa", $id)->whereHas("tugas", function ($q) use ($id_projek) {
                        $q->where("id_projek", $id_projek)->whereIn("status", ["Selesai"]);
                    })->get()->count();
                    $proses = Penugasan::where("id_siswa", $id)->whereHas("tugas", function ($q) use ($id_projek) {
                        $q->where("id_projek", $id_projek)->whereIn("status", ["Belum Dimulai", "Siap Dikerjakan", "Dalam Pengerjaan"]);
                    })->get()->count();
                    $e->jumlah_tugas = $tugasCount;
                    $e->tugas_selesai = $tugas_selesai;
                    $e->proses = $proses;
                    return $e;
                });
                return response()->json($projek);
            }
        }
        $siswa = Siswa::with(["angkatan", "jurusan"])->find($id);
        $siswa->kelasDanJurusan =  $siswa->angkatan->kelas() . " " . $siswa->jurusan->jurusan;
        return response()->json($siswa);
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
        $siswa = Siswa::find($id);
        // $siswaCount = Siswa::where("nis", $request->nis)->orWhere("email", $request->email)->get()->count();

        $siswa->nama = $request->nama;
        $siswa->nis = $request->nis;
        $siswa->email = $request->email;
        $siswa->password = Hash::make($request->password);
        $siswa->id_angkatan = $request->id_angkatan;
        $siswa->id_jurusan = $request->id_jurusan;
        $siswa->jk = $request->jk;
        $imageName = time() . '_' . $request->nama . "_" . $request->id_angkatan . "_" . $request->id_jurusan . ".png";
        if ($request->hasFile("fotoprofil")) {
            $request->fotoprofil->move(public_path('img/profilsiswa'), $imageName);
            $siswa->fotoprofil = $imageName;
        }

        $siswa->save();


        return response()->json(["keterangan" => "datanya adalah", "data" => $request->input()]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    //Cetak Raport

    public function cetakraport(Request $request)
    {
        $dari = $request->dari;
        $sampai = $request->sampai;
        $id_siswa = $request->id_siswa;
        $rapor = Projek::whereHas("tugas.penugasan.siswa", function ($q) use ($id_siswa) {
            $q->where("id", $id_siswa);
        });
        dd($rapor->get());
    }
}
