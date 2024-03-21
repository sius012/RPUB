<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use App\Exports\ExportLPPIF;
use App\Exports\ExportLPPNF;

class ExportLPPS implements WithMultipleSheets
{
    /**
     * @return \Illuminate\Support\Collection
     */
    use Exportable;
    private $data;
    public function __construct($data)
    {
        $this->data = $data;
    }

    public function sheets(): array
    {
        $sheets = [];

        // Add sheets as needed

        $sheets["projek"] = new ExportRaportInformalNonformal($this->data["projek"], $this->data["siswa"], $this->data["semester"]);
        //    / dd($this->data["projek"]);
        foreach ($this->data["projek"] as $prjk) {
            foreach ($prjk->tugas as $i => $tugas) {

                $sheets[$tugas->nama . " Non Formal"] = new ExportLPPNF($tugas->penilaianProjek->first(), 1 + (($i + 1) / 10));
                $sheets[$tugas->nama . " Informals"] = new ExportLPPIF($tugas->penilaianProjek->first(), 1 + (($i + 1) / 10));
            }
        }

        return $sheets;
    }
}
