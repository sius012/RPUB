<?php

namespace App\Http\Controllers\Siswa;

use App\Http\Controllers\Controller;
use App\Models\Angkatan;
use App\Models\Jurusan;
use App\Models\Siswa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;

class API_SiswaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
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
        try {
            $siswa = Http::get("https://nilaikarakter.smkbagimunegeriku.sch.id/api/siswa")->json();
            $siswaAll = Siswa::all();
            foreach ($siswa as $s => $sws) {
                $siswaCount = Siswa::where("nis", $sws["nis"])->get()->count();
                $namaJurusan = $sws["jurusan"]["jurusan"] == "PPLG" ? "RPL" : $sws["jurusan"]["jurusan"];
                $id_jurusan = "";
                $jurusanCount = Jurusan::where("jurusan", $namaJurusan)->get()->count();
                if ($jurusanCount < 1) {
                    $jurusan = Jurusan::create(["jurusan" => $sws["jurusan"]["jurusan"], "keterangan" => $sws["jurusan"]["keterangan"]]);
                    $id_jurusan = $jurusan->id;
                } else {
                    $id_jurusan = Jurusan::where("jurusan", $namaJurusan)->pluck("id")->first();
                }


                $angkatanQuery = Angkatan::where("id_angkatan", $sws["id_angkatan"]);
                $angkatanCount = $angkatanQuery->get()->count();
                $id_angkatan = "";
                if ($angkatanCount < 1) {
                    $angkatan = Angkatan::create(["id_angkatan" => $sws["id_angkatan"], "dari" => $sws["tanggal_mulai"], "sampai" => $sws["tanggal_selesai"]]);
                    $id_angkatan = $angkatan->id;
                } else {
                    $id_angkatan = $angkatanQuery->pluck("id")->first();
                }



                if ($siswaCount < 1) {
                    $jk = "";
                    switch ($sws["jenis_kelamin"]) {
                        case 'L':
                            $jk = "Laki-laki";
                            break;

                        case 'P':
                            $jk = "Perempuan";
                            break;

                        default:
                            $jk = $sws["jenis_kelamin"];
                            break;
                    }
                    $newSiswa = new Siswa();
                    $newSiswa->nama = $sws["nama_siswa"];
                    $newSiswa->nis = $sws['nis'];
                    $newSiswa->jk = $jk;
                    $newSiswa->id_angkatan = $id_angkatan;
                    $newSiswa->id_jurusan = $id_jurusan;
                    $newSiswa->email = preg_replace('/\s+/', "", strtolower($sws["nama_siswa"])) . $sws["id_angkatan"] . "@gmail.com";
                    $newSiswa->password =  Hash::make("password");
                    $newSiswa->fotoprofil = "default.jpg";
                    $newSiswa->save();
                }
            }
            return response()->json(["keterangan" => "berhasil"]);
        } catch (\Throwable $th) {
            dd($th);
            return response()->json(["keterangan" => "data gagal diimport"]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
        //
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
}
