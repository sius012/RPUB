<?php

namespace App\Http\Controllers\Pencarian;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Projek;
use App\Models\Siswa;
use App\Models\Tugas;
use App\Models\Versi;

class PencarianController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $req)
    {
        $kw = $req->kw;

        //Pencarian Data Projek;
        $projek = Projek::where("nama", "LIKE", "%" . $kw . "%")->get();
        $siswa = Siswa::where("nama", "LIKE", "%" . $kw . "%")->get();
        $tugas = Tugas::where("nama", "LIKE", "%" . $kw . "%")->get();
        $versi = Versi::where("nama", "LIKE", "%" . $kw . "%")->get();

        return response()->json(["projek" => $projek, "siswa" => $siswa, "tugas" => $tugas, "versi" => $versi]);
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
