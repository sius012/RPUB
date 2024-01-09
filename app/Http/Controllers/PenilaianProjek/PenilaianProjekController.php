<?php

namespace App\Http\Controllers\PenilaianProjek;

use App\Exports\ExportLPP;
use App\Exports\ExportLPPNF;
use App\Http\Controllers\Controller;
use App\Models\PenilaianInformal;
use App\Models\PenilaianNonFormal;
use App\Models\PenilaianProjek;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;

class PenilaianProjekController extends Controller
{
    public function index(Request $req)
    {
        $penilaianprojek = new PenilaianProjek;
        if ($req->has("id_projek")) {
            $penilaianprojek = $penilaianprojek->where('id_projek', $req->id_projek);
        }
        return response()->json($penilaianprojek->get());
    }


    public function create()
    {
        //
    }


    public function store(Request $req)
    {
        // $siswa = $req->input();
        // $pp = new PenilaianProjek();
        // $pp->id_siswa = $req->id_siswa;
        // $pp->id_projek = $req->id_projek;
        // $pp->id_penilai = Auth::user()->id;
        // $pp->n_nformal = $req->n_nformal;
        // $pp->antusias = $req->antusias;
        // $pp->kejujuran = $req->kejujuran;
        // $pp->kreativitas = $req->kreativitas;
        // $pp->tanggung_jawab = $req->tanggung_jawab;
        // $pp->komunikasi = $req->komunikasi;
        // $pp->etika_sopansantun = $req->etika_sopansantun;
        // $pp->k3 = $req->k3;
        // $pp->save();

        //membuat penilaian projek

        DB::beginTransaction();
        $penilaian = new PenilaianProjek();
        try {

            $penilaian->id_penilai = Auth::user()->id;
            $penilaian->id_siswa = $req->id_siswa;
            $penilaian->id_tugas = $req->id_tugas;
            $penilaian->save();

            //membuat penilaian_non_formal;
            foreach ($req->penilaian_non_formal as $i => $idk) {
                $penilaian_non_formal = new PenilaianNonFormal();
                $penilaian_non_formal->id_penilaian = $penilaian->id;
                $penilaian_non_formal->id_indikator = $idk['indikator'];
                $penilaian_non_formal->nilai = $idk['nilai'];
                $penilaian_non_formal->save();
            }

            //membuat penilaian_informal
            $pnf = $req->penilaian_informal;

            $penilaian_informal = new PenilaianInformal();
            $penilaian_informal->id_penilaian = $penilaian->id;
            $penilaian_informal->inisiatif = $pnf['inisiatif'];
            $penilaian_informal->antusias = $pnf['antusias'];
            $penilaian_informal->kejujuran = $pnf['kejujuran'];
            $penilaian_informal->kreativitas = $pnf['kreativitas'];
            $penilaian_informal->tanggung_jawab = $pnf['tanggung_jawab'];
            $penilaian_informal->komunikasi = $pnf['komunikasi'];
            $penilaian_informal->kedisiplinan = $pnf["kedisiplinan"];
            $penilaian_informal->etika_sopansantun = $pnf['etika_sopansantun'];
            $penilaian_informal->k3 = $pnf['k3'];
            $penilaian_informal->save();
            DB::commit();
        } catch (\Throwable $th) {

            DB::rollBack();
        }

        return response()->json($penilaian);
    }

    public function update(Request $req, $id)
    {
        //  DB::beginTransaction();
        $penilaian = PenilaianProjek::find($id);
        //try {

        $penilaian->id_penilai = Auth::user()->id;
        $penilaian->save();

        //membuat penilaian_non_formal;

        foreach ($req->penilaian_non_formal as $i => $idk) {
            $penilaian_non_formal = PenilaianNonFormal::find($idk["id"]);
            $penilaian_non_formal->id_penilaian = $penilaian->id;
            $penilaian_non_formal->id_indikator = $idk['indikator'];
            $penilaian_non_formal->nilai = $idk['nilai'];
            $penilaian_non_formal->save();
        }

        //membuat penilaian_informal
        $pnf = $req->penilaian_informal;

        $penilaian_informal = PenilaianInformal::find($pnf["id"]);
        $penilaian_informal->id_penilaian = $penilaian->id;
        $penilaian_informal->inisiatif = $pnf['inisiatif'];
        $penilaian_informal->antusias = $pnf['antusias'];
        $penilaian_informal->kejujuran = $pnf['kejujuran'];
        $penilaian_informal->kreativitas = $pnf['kreativitas'];
        $penilaian_informal->tanggung_jawab = $pnf['tanggung_jawab'];
        $penilaian_informal->komunikasi = $pnf['komunikasi'];
        $penilaian_informal->kedisiplinan = $pnf["kedisiplinan"];
        $penilaian_informal->etika_sopansantun = $pnf['etika_sopansantun'];
        $penilaian_informal->k3 = $pnf['k3'];
        $penilaian_informal->save();
        // DB::commit();
        // } catch (\Throwable $th) {

        //     DB::rollBack();
        // }

        return response()->json($penilaian);
    }


    public function show($id, Request $req)
    {
        if ($req->has("download")) {
            $penilaian = PenilaianProjek::with(["penilaian_non_formal.indikator", "penilaian_informal", "siswa", "penilai", "tugas.projek"])->find($id);
            ob_end_clean();
            ob_start();
            return Excel::download(new ExportLPP($penilaian), "Penilaian.xlsx");
        }
        return response()->json(PenilaianProjek::with(["penilaian_non_formal.indikator", "penilaian_informal"])->find($id));
    }

    public function destroy($id)
    {
        //hapus penilaian non formal;
        PenilaianNonFormal::where("id_penilaian", $id)->delete();

        //hapus penilaian informal;
        PenilaianInformal::where("id_penilaian", $id)->delete();

        PenilaianProjek::find($id)->delete();
    }
}
