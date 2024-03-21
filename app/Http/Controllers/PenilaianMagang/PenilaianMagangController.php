<?php

namespace App\Http\Controllers\PenilaianMagang;

use App\Http\Controllers\Controller;
use App\Models\PenilaianMagang;
use App\Models\PenilaianMagangDetail;
use App\Models\PenilaianMagangInformal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use RealRashid\SweetAlert\Facades\Alert;

class PenilaianMagangController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $req)
    {
        if($req->has("get_by_siswa")){
            $penilaian = PenilaianMagang::with("penilaian_magang_detail.template_magang_detail","siswa","template_magang")->where("id_siswa",$req->id_siswa);
            return response()->json($penilaian->get());
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
        DB::beginTransaction();
        try {
            $id_siswa= $request->id_siswa;
            $nama_penilai = $request->nama_penilai;
            $sebagai = $request->sebagai;
            $tanggal_pengisian = $request->tanggal_pengisian;
            $penilaianMagang = new PenilaianMagang();
            $penilaianMagang->id_template_magang = $request->id_template_magang;
            $penilaianMagang->id_siswa = $id_siswa;
            $penilaianMagang->nama_penilai = $nama_penilai;
            $penilaianMagang->sebagai = $sebagai;
            $penilaianMagang->tanggal_pengisian = $tanggal_pengisian;
    
            $penilaianMagang->save();
    
            foreach ($request->aspek_nonformal as $key => $anf) {
                $detailPenilaianMagang = new PenilaianMagangDetail();
                $detailPenilaianMagang->id_penilaian_magang = $penilaianMagang->id;
                $detailPenilaianMagang->id_detail_template_magang = $key;
                $detailPenilaianMagang->nilai = $anf;
                $detailPenilaianMagang->keterangan = $request->keterangan[$key];
    
                $detailPenilaianMagang->save();
            }
    
            $penilaianMagangInformal = new PenilaianMagangInformal();
            $penilaianMagangInformal->id_penilaian_magang = $penilaianMagang->id;
            $penilaianMagangInformal->inisiatif = $request->inisiatif;
            $penilaianMagangInformal->antusias = $request->antusias;
            $penilaianMagangInformal->kejujuran = $request->kejujuran;
            $penilaianMagangInformal->kreativitas = $request->kreativitas;
            $penilaianMagangInformal->tanggung_jawab = $request->tanggung_jawab;
            $penilaianMagangInformal->komunikasi = $request->komunikasi;
            $penilaianMagangInformal->kedisiplinan = $request->kedisiplinan;
            $penilaianMagangInformal->etika_sopansantun =$request->etika_sopansantun;
            $penilaianMagangInformal->k3 = $request->k3;
            $penilaianMagangInformal->keterangan = $request->keterangan_informal;
    
            $penilaianMagangInformal->save();
            DB::commit();
            
        } catch (\Throwable $th) {
            DB::rollBack();
            dd($th);
        }
       
      
        Alert::success("Penilaian Berhasil Dikirim", "Terimakasih sudah memberikan waktu anda untuk memberikan penilaian kepada peserta didik kami");
       // $detailPenilaianMagang->id_detail
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $penilaian = PenilaianMagang::with("penilaian_magang_detail.template_magang_detail","siswa","template_magang","penilaian_magang_informal")->find($id);
        return response()->json($penilaian);
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
        $penilaian = PenilaianMagang::with("penilaian_magang_detail","penilaian_magang_informal")->find($id);
        $penilaian->delete();
        return response()->json(["notes"=>"success"]);
        
    }
}
