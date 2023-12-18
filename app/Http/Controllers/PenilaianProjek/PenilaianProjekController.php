<?php

namespace App\Http\Controllers\PenilaianProjek;

use App\Http\Controllers\Controller;
use App\Models\PenilaianProjek;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
        $pp->id_siswa = $req->id_siswa;
        $pp->id_projek = $req->id_projek;
        $pp->id_penilai = Auth::user()->id;
        $pp->n_nformal = $req->n_nformal;
        $pp->antusias = $req->antusias;
        $pp->kejujuran = $req->kejujuran;
        $pp->kreativitas = $req->kreativitas;
        $pp->tanggung_jawab = $req->tanggung_jawab;
        $pp->komunikasi = $req->komunikasi;
        $pp->etika_sopansantun = $req->etika_sopansantun;
        $pp->k3 = $req->k3;
        $pp->keterangan = $req->keterangan;
        $pp->save();
        return response()->json($siswa);
    }

    public function update(Request $req, $id)
    {
        $siswa = $req->input();
        $pp = PenilaianProjek::find($id);
        $pp->id_siswa = $req->id_siswa;
        $pp->id_projek = $req->id_projek;
        $pp->id_penilai = Auth::user()->id;
        $pp->n_nformal = $req->n_nformal;
        $pp->antusias = $req->antusias;
        $pp->kejujuran = $req->kejujuran;
        $pp->kreativitas = $req->kreativitas;
        $pp->tanggung_jawab = $req->tanggung_jawab;
        $pp->komunikasi = $req->komunikasi;
        $pp->etika_sopansantun = $req->etika_sopansantun;
        $pp->k3 = $req->k3;
        $pp->keterangan = $req->keterangan;
        $pp->save();
        return response()->json($siswa);
    }


    public function show($id)
    {
        return response()->json(PenilaianProjek::find($id));
    }
}
