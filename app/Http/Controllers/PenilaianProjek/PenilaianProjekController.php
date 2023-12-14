<?php

namespace App\Http\Controllers\PenilaianProjek;

use App\Http\Controllers\Controller;
use App\Models\PenilaianProjek;
use Illuminate\Http\Request;

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
        $siswa = $req->input();
        $pp = new PenilaianProjek();
        $pp->id_projek = $siswa->id_projek;
        $pp->id_penilai = $siswa->id_penilai;
        $pp->n_nformal = $siswa->n_nformal;
        $pp->antusias = $siswa->antusias;
        $pp->kejujuran = $siswa->kejujuran;
        $pp->kreatifitas = $siswa->kejujuran;
        $pp->tanggung_jawab = $siswa->tanggung_jawab;
        $pp->komunikasi = $siswa->komunikasi;
        $pp->etika_sopansantun = $siswa->etika_sopansantun;
        $pp->k3 = $siswa->k3;
        $pp->keterangan = $siswa->keterangan;
        return response()->json($pp);
    }


    public function show($id)
    {
        return response()->json(PenilaianProjek::find($id));
    }


    
}
