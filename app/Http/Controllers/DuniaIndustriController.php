<?php

namespace App\Http\Controllers;

use App\Models\DuniaIndustri;
use App\Models\Jurusan;
use App\Models\JurusanDudi;
use App\Models\Siswa;
use Illuminate\Http\Request;

class DuniaIndustriController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $req)
    {
        
        $dudi = DuniaIndustri::with("jurusan_dudi.jurusan")->get();
        
        return response()->json(["dudi" => $dudi]);
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
        $dudi = new DuniaIndustri();
        $dudi->nama = $request->nama;
        $dudi->alamat = $request->alamat;
        $dudi->deskripsi = $request->deskripsi;


        ob_end_clean();

        ob_start();
        if($request->hasFile("logo")){
            $nameFile = $request->nama."-".time().".png";
            $dudi->logo = $nameFile;
            $request->logo->move(public_path("img/logodudi"),$nameFile);
        }else{
            $dudi->logo = "default.png";
        }

        $dudi->save();

        foreach (explode(",",$request->jurusan) as $i => $jdudi) {
            JurusanDudi::create(["id_jurusan"=>$jdudi,"id_dunia_industri"=>$dudi->id]);
        }
    
        return response()->json($request->input());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $req,$id)
    {
        if($req->has("onlyStudent")){
            $siswa = Siswa::where("nama","LIKE","%".$req->nama."%")->whereHas("siswa_magang_dudi.kloter_dudi", function($q) use($req,$id){
                $q->where("id_dunia_industri",$id);
            });
            return response()->json($siswa->get());
        }


        $dudi = DuniaIndustri::with("jurusan_dudi.jurusan");
        if($req->has("templateMagang")){
            $dudi = $dudi->with("template_magang");
        }
        return response()->json($dudi->find($id));
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
        
    }
}
