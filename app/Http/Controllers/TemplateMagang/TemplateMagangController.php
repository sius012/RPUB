<?php

namespace App\Http\Controllers\TemplateMagang;

use App\Http\Controllers\Controller;
use App\Models\TemplateMagang;
use App\Models\TemplateMagangDetail;
use Illuminate\Http\Request;
use SebastianBergmann\Template\Template;

class TemplateMagangController extends Controller
{ 
    public function index(Request $req){
        $templateMagang = TemplateMagang::query();

        if($req->has("id_dunia_industri")){
            $templateMagang = $templateMagang->where("status","Aktif")->where("id_dunia_industri", $req->id_dunia_industri);
        }
        return response()->json($templateMagang->get());
      
    }

    public function update(Request $request, $id){
        $templateMagang = TemplateMagang::find($id);
        
        if($request->has("status")){
            $templateMagang->status = $request->status;
        }

        $templateMagang->save();
        return response()->json($templateMagang);
    }

    public function show(Request $req, $id){
        $tm = new TemplateMagang();
        if($req->has("formDanPenilaian")){
            $tm = $tm->withCount("penilaian_magang","form_penilaian_magang");
            $tm = $tm->find($id);
            $result = true;
            if($tm->penilaian_magang_count > 0 or $tm->form_penilaian_magang_count > 0){
              $result = true;
            }else{
                $result = false;
            }
            return response()->json($result);
        }
        if($req->has("template_magang_detail")){
            $tm = $tm->with("template_magang_detail");
        }
        return response()->json($tm->find($id));
    }
    public function store(Request $req){
        $templateMagang = new TemplateMagang();
        $templateMagang->nama = $req->nama;
        $templateMagang->deskripsi = $req->deskripsi;
        $templateMagang->id_dunia_industri = $req->id_dunia_industri;
        $templateMagang->save();

        foreach ($req->template_magang_detail_raw as $i => $tmdr) {
            TemplateMagangDetail::create(["nama"=>$tmdr['nama'],"nilai_max"=>$tmdr['nilai_max'],"aspek"=>$tmdr['aspek'],"id_template_magang"=>$templateMagang->id]);
        }

        return response()->json($templateMagang);
    }

    public function destroy($id){
        $templateMagang = TemplateMagang::with("template_magang_detail")->find($id);
        $count = TemplateMagangDetail::where("id_template_magang",$id)->get()->count();
        if($count> 0){
            TemplateMagangDetail::where("id_template_magang",$id)->delete();
        }
        $templateMagang->delete();
        return response()->json(["keterangan"=>"Berhasil"]);
        
    }
}
