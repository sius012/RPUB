<?php

namespace App\Http\Controllers;

use App\Models\KloterDudi;
use App\Models\SiswaMagangDudi;
use Illuminate\Http\Request;

class KloterDudiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $req)
    {
        $kloterDudi = KloterDudi::query();

        if ($req->filled("id_dudi")) {
            $kloterDudi = $kloterDudi->where("id_dunia_industri", $req->id_dudi);
        }
        return response()->json($kloterDudi->get());
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
        $dudi = new KloterDudi();
        $dudi->nama = $request->nama;
        $dudi->id_dunia_industri = $request->id_dunia_industri;
        $dudi->tanggal_mulai = $request->tanggal_mulai;
        $dudi->tanggal_selesai = $request->tanggal_selesai;
        $dudi->save();
        return response()->json($dudi);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id, Request $req)
    {

        if ($req->has("siswaKloter")) {
            $siswaKloter = SiswaMagangDudi::with("siswa")->where("id_kloter_dudi", $id)->get();
            return response()->json($siswaKloter);
        }
        $kloterDudi = KloterDudi::find($id);
        return response()->json($kloterDudi);
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
