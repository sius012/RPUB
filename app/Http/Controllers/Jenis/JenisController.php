<?php

namespace App\Http\Controllers\Jenis;

use App\Http\Controllers\Controller;
use App\Models\Jenis;
use App\Models\ProjekJurusan;
use Illuminate\Http\Request;

class JenisController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $req)
    {
        $jenis = new Jenis;
        if ($req->has("jurusan")) {
            if ($req->jurusan == 1) {
                $jenis = $jenis->with("jurusan");
            }
        }

        if ($req->has("id_jurusan")) {
            $jenis = $jenis->where("id_jurusan", $req->id_jurusan);
        }
        if ($req->has("id_projek")) {
            $id_jurusan = ProjekJurusan::where("id_projek", $req->id_projek)->pluck("id_jurusan")->toArray();
            $jenis = Jenis::whereIn("id_jurusan", $id_jurusan);
        }
        return response()->json($jenis->get());
        // return response()->json(Jenis::all());
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
        return response()->json(Jenis::find($id));
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
