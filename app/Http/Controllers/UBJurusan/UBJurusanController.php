<?php

namespace App\Http\Controllers\UBJurusan;

use App\Http\Controllers\Controller;
use App\Models\UBJurusan;
use Illuminate\Http\Request;

class UBJurusanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $req)
    {
        if ($req->has("id_pengguna")) {
            $ubJurusan = UBJurusan::with("jurusan")->where("id_pengguna", $req->id_pengguna)->get();
            return response()->json($ubJurusan);
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
        //clear all ub jurusan ;
        UBJurusan::where("id_pengguna", $request->id_pengguna)->delete();
        if ($request->has("ub_jurusan")) {
            foreach ($request->ub_jurusan as $ub => $ubj) {
                UBJurusan::create([
                    "id_pengguna" => $request->id_pengguna,
                    "id_jurusan" => $ubj['id_jurusan'],
                    "k3" => $ubj["k3"]
                ]);
            }
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
