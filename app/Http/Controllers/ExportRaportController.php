<?php

namespace App\Http\Controllers;

use App\Exports\ExportLPP;
use App\Exports\ExportLPPS;
use App\Exports\ExportRaportInformalNonformal;
use App\Models\Projek;
use App\Models\Siswa;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ExportRaportController extends Controller
{
    public function download(Request $req)
    {

        $siswa = Siswa::with("angkatan", "jurusan")->find($req->siswa);
        $data = Projek::where("tanggal_mulai", "<=", Carbon::parse($siswa->angkatan->dari)->addMonth($req->semester * 6)->format("Y-m-d"))->whereHas("tugas.penilaianProjek", function ($j) {
            $j->where("id_siswa", 158);
        })->with(["tugas" => function ($q) {
            $q->with(["penilaianProjek" => function ($pn) {
                $pn->with("penilaian_informal", "penilaian_non_formal", "tugas")->where("id_siswa", 158);
            }])->whereHas("penilaianProjek", function ($j) {
                $j->where("id_siswa", 158);
            });
        }]);



        ob_end_clean();

        ob_start();
        $data = $data->get();

        // return view("output.raport_informal_nonformal", ["data" => $data, "siswa" => $siswa]);
        return Excel::download(new ExportLPPS(["projek" => $data, "siswa" => $siswa]), 'invoices.xlsx');
    }
}
