<?php

namespace App\Http\Controllers\Projek;

use App\Http\Controllers\Controller;
use App\Models\Penugasan;
use App\Models\Projek;
use App\Models\ProjekJurusan;
use App\Models\Tugas;
use App\Models\Versi;
use Illuminate\Http\Request;

class ProjekController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $projek = new Projek;
        if ($request->has("id_jurusan")) {
            $projek = $projek->where("id_jurusan", $request->id_jurusan);
        }
        if ($request->has("id_siswa")) {
            $id_tugas = Penugasan::where("id_siswa", $request->id_siswa)->get()->pluck("id_tugas")->toArray();
            $id_projek = Tugas::whereIn("id", $id_tugas)->get()->pluck("id_projek");
            $projek = $projek->whereIn("id", $id_projek);
        }
        $projek = $projek->get();
        foreach ($projek as $i => $prjk) {
            $projek[$i]->image = Versi::whereIn("id_tugas", Tugas::where("id_projek", $prjk->id)->get()->pluck("id")->toArray())->get()->pluck("lampiran");
        }
        return response()->json($projek);
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
        $projek = $request->input();
        $projek["id_pembuat"] = 1;
        $newprojek  = $projek;
        unset($newprojek["id_jurusan"]);
        $dataprojek = Projek::create($newprojek);


        //addProjekHasJurusan;
        foreach ($projek["id_jurusan"] as $prj) {
            ProjekJurusan::create([
                "id_projek" => $dataprojek->id,
                "id_jurusan" => $prj
            ]);
        }
        return response()->json($projek);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(Projek::find($id));
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
