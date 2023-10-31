<?php

namespace App\Http\Controllers\Siswa;

use App\Http\Controllers\Controller;
use App\Models\Jurusan;
use App\Models\ProjekJurusan;
use App\Models\Siswa;
use Illuminate\Http\Request;
use App\Models\Tugas;

class SiswaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $req)
    {
        $siswa = new Siswa();

        if ($req->has("byQuery")) {
            $id_projek = Tugas::find($req->id_tugas)->id_projek;
            $id_jurusan = ProjekJurusan::where("id_projek", $req->id_jurusan)->pluck("id_jurusan")->toArray();
            $siswa = $siswa->whereIn("id_projek", $id_jurusan);
            $siswa = $siswa->with("penugasan")->where("id_jurusan", $req->id_jurusan)->whereHas("penugasan", function ($q) use ($req) {
                $q->where("id_tugas", $req->id_tugas);
            });
            if ($req->filled("nama")) {
                $siswa = $siswa->orWhere("nama", "LIKE", "%" . $req->nama . "%");
            }
            $siswa = $siswa->get()->map(function ($q) {
                $sws = $q;
                $sws->ikut_penugasan = $q->penugasan->count() > 0 ? true : false;
                return $sws;
            });
        }
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(Siswa::find($id));
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
