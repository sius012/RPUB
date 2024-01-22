<?php

namespace App\Http\Controllers\Jurusan;

use App\Http\Controllers\Controller;
use App\Models\Jurusan;
use App\Models\Projek;
use App\Models\ProjekJurusan;
use App\Models\Siswa;
use App\Models\UBJurusan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class JurusanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $req)
    {
        $jurusan = new Jurusan();
        if (!in_array("Super Admin", Auth::user()->roles->pluck("name")->toArray())) {
            if ($req->has("ubjurusan")) {
                if ($req->ubjurusan == true) {
                    $jurusanList = UBJurusan::where("id_pengguna", Auth::user()->id)->pluck("id_jurusan")->toArray();
                    $jurusan = $jurusan->whereIn("id", $jurusanList);
                }
            }
        }
        $jurusan = $jurusan->get();
        foreach ($jurusan as $j => $jrs) {
            if ($req->has("detail_level")) {
                switch ($req->detail_level) {
                    case 3:
                        $jurusan[$j]->jumlah_siswa = Siswa::where("id_jurusan", $jrs->id)->get()->count();
                        $jurusan[$j]->siswa_aktif_projek = Siswa::where("id_jurusan", $jrs->id)->whereHas("penugasan")->get()->count();
                        break;
                }
            }
            $jurusan[$j]->jumlah_projek = Projek::whereHas("projek_jurusan", function ($q) use ($jrs) {
                $q->where("id_jurusan", $jrs->id);
            })->get()->count();
        }
        return response()->json($jurusan);
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
        $jurusan = new Jurusan();
        $jurusan->jurusan = $request->jurusan;
        $jurusan->keterangan = $request->keterangan;
        $jurusan->save();
        return response()->json($jurusan);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(Jurusan::find($id));
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
        $jurusan = Jurusan::find($id);
        $jurusan->jurusan = $request->jurusan;
        $jurusan->keterangan = $request->keterangan;
        $jurusan->save();
        return response()->json($jurusan);
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
