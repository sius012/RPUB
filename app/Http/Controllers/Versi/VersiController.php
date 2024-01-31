<?php

namespace App\Http\Controllers\Versi;

use App\Http\Controllers\Controller;
use App\Models\Versi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class VersiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $req)
    {
        $versi = Versi::with(["tugas", "siswa.angkatan"]);
        if ($req->has("id_projek")) {
            $versi = $versi->whereHas("tugas.projek", function ($q) use ($req) {
                $q->where("id_projek", $req->id_projek);
            });
            return response()->json($versi->get());
        }
        if ($req->has("id_tugas")) {
            $checkGuard = Auth::guard('web')->check() == true ? "admin" : "guard";

            $versi = $versi->where("id_tugas", $req->id_tugas);

            $authId = $checkGuard == "admin" ? Auth::user()->id : Auth::guard("student")->user()->id;


            $versi = $versi->orderBy("created_at", "desc");



            $versi = $versi->get()->map(function ($e) use ($checkGuard, $authId) {
                $controlled = false;
                if ($checkGuard != "admin") {
                    if ($e->id_siswa == $authId) {
                        $controlled = true;
                    } else {
                        $controlled = false;
                    }
                } else {
                    $controlled = true;
                }
                $e->controlled = $controlled;
                return $e;
            });

            return response()->json($versi);
        }
        if ($req->has("byTugasDanSiswa")) {
            $versi = Versi::where("id_siswa", $req->id_siswa)->where("id_tugas", $req->id_tugas)->get();
            return response()->json($versi);
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
        if ($request->has("id")) {
            return $this->update($request, $request->id);
        }
        $versi = new Versi;
        $versi->id_tugas = $request->id_tugas;
        $versi->id_siswa = $request->id_siswa;
        $versi->nama = $request->nama;
        $versi->keterangan = $request->keterangan;
        if ($request->hasFile("lampiran")) {
            $imageName = time() . '.' . $request->nama . "." . date("dmyhis") . ".png";
            $request->lampiran->move(public_path('versi'), $imageName);
            $versi->lampiran = $imageName;
        }

        $versi->status = "Belum dimulai";
        $versi->save();

        return response()->json(["data" => $request->files]);
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
        $versi = Versi::find($id);


        if ($request->filled("status")) {
            $versi->status = $request->status;
        }

        if ($request->filled("nama")) {
            $versi->nama = $request->nama;
        }
        if ($request->filled("keterangan")) {
            $versi->keterangan = $request->keterangan;
        }


        if ($request->hasFile("lampiran")) {
            if ($versi->lampiran != null) {
                unlink(public_path("versi/" . $versi->lampiran));
            }
            $imageName = time() . '.' . $request->nama . "." . date("dmyhis") . ".png";
            $request->lampiran->move(public_path('versi'), $imageName);
            $versi->lampiran = $imageName;
        }


        $versi->save();

        return response()->json($versi);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $versi = Versi::find($id);
        $versi->delete();

        return;
    }
}
