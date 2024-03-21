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
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Reader\Gnumeric\PageSetup;
use PhpOffice\PhpSpreadsheet\Worksheet\PageSetup as WorksheetPageSetup;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;




class ExportRaportController extends Controller
{
    public function download(Request $req)
    {

        $siswa = Siswa::with("angkatan", "jurusan")->find($req->siswa);
        $data = Projek::where("tanggal_awal", "<=", Carbon::parse($siswa->angkatan->dari)->addMonth($req->semester * 6)->format("Y-m-d"))->whereHas("tugas.penilaianProjek", function ($j) use ($req){
            $j->where("id_siswa", $req->siswa);
        })->with(["tugas" => function ($q) use ($req) {
            $q->with(["penilaianProjek" => function ($pn) use ($req){
                $pn->with("penilaian_informal", "penilaian_non_formal", "tugas")->where("id_siswa", $req->siswa);
            }])->whereHas("penilaianProjek", function ($j) use ($req){
                $j->where("id_siswa", $req->siswa);
            });
        }]);

     


        ob_end_clean();

        ob_start();
        $data = $data->get();


         // return view("output.raport_informal_nonformal", ["data" => $data, "siswa" => $siswa]);
        $excel = new ExportLPPS(["projek" => $data, "siswa" => $siswa, "semester"=>$req->semester]);
        $spreadsheet = Excel::download($excel, 'temp.xlsx', \Maatwebsite\Excel\Excel::XLSX)->getFile()->getRealPath();
         // Load the Excel file
         $spreadsheet = IOFactory::load($spreadsheet);
         $worksheet = $spreadsheet->getActiveSheet();
         $spreadsheet->getActiveSheet()->getPageSetup()->setPrintArea('A1:O50'); // Set the print area
         $spreadsheet->getActiveSheet()->getPageSetup()->setPaperSize(WorksheetPageSetup::PAPERSIZE_LETTER);
         $spreadsheet->getActiveSheet()->getPageSetup()->setFitToWidth(1);
         $worksheet->getPageMargins()->setTop(0.25);    // Top margin in inches
         $worksheet->getPageMargins()->setRight(0.25);  // Right margin in inches
         $worksheet->getPageMargins()->setBottom(0.25); // Bottom margin in inches
         $worksheet->getPageMargins()->setLeft(0.25);   // Left margin in inches
         $writer = new Xlsx($spreadsheet);
        
         // Save the modified Excel file
         $writer->save(storage_path('app/public/Raport Pendamping '.$siswa->nama.'.xlsx'));
 
         return response()->download(storage_path('app/public/Raport Pendamping '.$siswa->nama.'.xlsx'))->deleteFileAfterSend(true);
    }
}
