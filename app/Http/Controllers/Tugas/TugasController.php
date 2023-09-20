<?php

namespace App\Http\Controllers\Tugas;

use App\Http\Controllers\Controller;
use App\Models\Penugasan;
use App\Models\Tugas;
use App\Models\Versi;
use Illuminate\Http\Request;

class TugasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if($request->has('penugasan')){
            $this->getTaskBoard($request);
        }else{
            return response()->json(Tugas::byProjek($request->id_projek));
        }
       
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
        Tugas::create($request->input());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id, Request $req)
    {
        if($req->has('params')){
            if($req->params == ("version-image")){
                $versi = Versi::where("id_tugas", $id)->get()->pluck("lampiran");
                return response()->json($versi);
            }
        }
        return response()->json(Tugas::with("jenis")->find($id));
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
        $tugas = Tugas::find($id);
        $tugas->update($request->input());

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $tugas = Tugas::find($id);
        $tugas->delete();
    }

    public function getTaskBoard(Request $req){
        $tugas = new Tugas();

        switch ($req->status) {
            case ($req->status == "Belum Dimulai" or $req->status == "Siap Dikerjakan"):
                $tugas = Tugas::whereHas("penugasan", function($q) use($req){
                    $q->where("id_siswa", $req->id_siswa)->whereIn("status",["Siap Dikerjakan","Belum Dimulai"]);
                })->get();
                break;
            case 'Dalam Pengerjaan':
                
                $tugas = Tugas::whereHas("penugasan", function($q) use($req){
                    $q->where("id_siswa", $req->id_siswa)->whereIn("status",["Dalam Pengerjaan","Ditinjau"]);
                })->get();
                break;
            case 'Revisi':
                
                $tugas = Tugas::whereHas("penugasan", function($q) use($req){
                    $q->where("id_siswa", $req->id_siswa)->whereIn("status",["Revisi"]);
                })->get();
                break;
            case 'Selesai':
            
                $tugas = Tugas::whereHas("penugasan", function($q) use($req){
                    $q->where("id_siswa", $req->id_siswa);
                })->whereIn("status",["Selesai"])->get();
               
                break;
        }
        foreach ($tugas as $i => $tgs) {
            $tugas[$i]->image = Versi::where("id_tugas", $tgs->id)->get()->pluck("lampiran");
        }
        return response()->json($tugas);
    }
}
