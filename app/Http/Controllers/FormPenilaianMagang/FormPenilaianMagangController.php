<?php

namespace App\Http\Controllers\FormPenilaianMagang;

use App\Http\Controllers\Controller;
use App\Models\FormPenilaianMagang;
use App\Models\Siswa;
use Carbon\Carbon;
use Illuminate\Http\Request;
use RealRashid\SweetAlert\Facades\Alert;

class FormPenilaianMagangController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $req)
    {
        if($req->has("id_dunia_industri")){
            $data = FormPenilaianMagang::with("template_magang")->where("id_dunia_industri",$req->id_dunia_industri);
            return response()->json($data->get());
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
        $fpm = new FormPenilaianMagang();
        if($request->has("id")){
            $fpm = FormPenilaianMagang::find($request->id);
        }
        $fpm->id_dunia_industri = $request->id_dunia_industri;
        $fpm->id_template_magang = $request->id_template_magang;
        $fpm->list_siswa = join(",",$request->list_siswa);
        $fpm->token = $request->token;
        $fpm->expired_form = $request->expired_form;
        $fpm->url = generateRandomString();
        $fpm->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $req,$id)
    {
        if($req->has("checkToken")){
            $count = FormPenilaianMagang::where("id",$id)->where("token",$req->token)->get()->count();
            if($count>0){
                return response()->json(true);
            }else{
                return response()->json(false);
            }
        }
        $form = FormPenilaianMagang::find($id);
        $form->siswa = $form->siswa();
        return response()->json($form);
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
        $fpm = FormPenilaianMagang::find($id);
        $fpm->delete();
        return response()->json(["keterangan"=>"berhasil"]);
    }


    public function showpenilaian($url){
        $formpenilaian = FormPenilaianMagang::with("template_magang.template_magang_detail")->where("url",$url)->first();
        if(Carbon::parse($formpenilaian->expired_form)->lessThan(Carbon::now())){
            Alert::error("Form telah kadaluarsa");
            return redirect("/errorlink");
        }
        $listSiswa = Siswa::whereIn("id",explode(",",$formpenilaian->list_siswa))->get();
        return view("pages.form_penilaian.index",["siswa"=>$listSiswa,"aspekNonFormal"=>$formpenilaian->template_magang->template_magang_detail,"id_template_magang"=>$formpenilaian->id_template_magang,"form"=>$formpenilaian]);
    }

    public function showerror(){
        echo "Error Gan";
    }
}
