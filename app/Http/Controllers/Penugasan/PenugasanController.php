<?php

namespace App\Http\Controllers\Penugasan;

use App\Http\Controllers\Controller;
use App\Models\Penugasan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PenugasanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $req)
    {
        $penugasan = new Penugasan;
        if($req->has("id_tugas")){
            $penugasan = $penugasan->where('id_tugas', $req->id_tugas);
        }
        return response()->json($penugasan->get());
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
    public function store(Request $req)
    {
        $siswa= $req->siswa;
        foreach ($siswa as $sws) {
          //Check Available
          $check = Penugasan::where("id_siswa",$req->id_siswa)->where("id_tugas",$req->id_tugas)->get()->count();
          if($check<1){
            $penugasan = new Penugasan();
            $penugasan->id_siswa = $sws['id_siswa'];
            $penugasan->id_tugas = $sws['id_tugas'];
            $penugasan->id_penugas = Auth::user()->id;
            $penugasan->keterangan = $sws['keterangan'];
            $penugasan->save();
          }
        }

        return response()->json(["data"=>$siswa]);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(Penugasan::find($id));
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
