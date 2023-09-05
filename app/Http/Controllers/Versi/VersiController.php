<?php

namespace App\Http\Controllers\Versi;

use App\Http\Controllers\Controller;
use App\Models\Versi;
use Illuminate\Http\Request;
use PharIo\Manifest\Requirement;

class VersiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $req)
    {
        $versi = new Versi;
        if($req->has("id_tugas")){
            $versi = $versi->where("id_tugas",$req->id_tugas);
        }
        return response()->json($versi->get());
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
        $versi = new Versi;
        $versi->id_tugas = $request->id_tugas;
        $versi->id_siswa = 1;
        $versi->nomor_versi = $request->nomor_versi;
        $versi->nama = $request->nama;
        $versi->keterangan = $request->keterangan;
        $imageName = time().'.'.$request->nama. ".".$request->nomor_versi.".png";
        $request->lampiran->move(public_path('versi'), $imageName);
        $versi->lampiran = $imageName;
        $versi->status = $request->status;
        $versi->save();
        
        return response()->json(["data"=>$request->files]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(Versi::find($id));
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
