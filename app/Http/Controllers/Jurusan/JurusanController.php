<?php

namespace App\Http\Controllers\Jurusan;

use App\Http\Controllers\Controller;
use App\Models\Jurusan;
use App\Models\Projek;
use App\Models\Siswa;
use Illuminate\Http\Request;

class JurusanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $req)
    {   
        $jurusan = Jurusan::all();
        foreach ($jurusan as $j => $jrs) {
            if($req->has("detail_level")){
                switch ($req->detail_level) {
                    case 3:
                        $jurusan[$j]->jumlah_siswa = Siswa::where("id_jurusan",$jrs->id)->get()->count();
                        $jurusan[$j]->siswa_aktif_projek = Siswa::where("id_jurusan",$jrs->id)->whereHas("penugasan")->get()->count();
                    break;
                }
            }
            $jurusan[$j]->jumlah_projek = Projek::where("id_jurusan", $jrs->id)->get()->count();
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
