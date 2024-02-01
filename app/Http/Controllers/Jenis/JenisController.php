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
        $jenis = $request->has("id") ? Jenis::find($request->id) : new Jenis();
        $jenis->nama = $request->nama;
        $jenis->keterangan = $request->keterangan;
        $jenis->tipe = $request->tipe;
        $jenis->id_jurusan = $request->id_jurusan;
        $filename = time() . "_" . $request->nama . "_" . $request->id_jurusan . ".png";
        $request->icon->move(public_path('img/icons/jenis'), $filename);
        $jenis->icon = $filename;
        $jenis->save();
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
        return response()->json($request);
        $jenis = Jenis::find($id);
        $jenis->nama = $request->nama;
        $jenis->keterangan = $request->keterangan;
        $jenis->tipe = $request->tipe;
        $jenis->id_jurusan = $request->id_jurusan;
        $filename = time() . "_" . $request->nama . "_" . $request->id_jurusan . ".png";
        $request->file('icon')->move(public_path('img/icons/jenis'), $filename);
        $jenis->icon = $filename;
        $jenis->save();
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
