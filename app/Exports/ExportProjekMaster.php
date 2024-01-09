<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use Maatwebsite\Excel\Concerns\Exportable;

class ExportProjekMaster implements WithMultipleSheets
{
    /**
     * @return \Illuminate\Support\Collection
     */
    use Exportable;
    private $id;
    public function __construct($id)
    {
        $this->id = $id;
    }

    public function sheets(): array
    {
        $sheet = [];
        $sheet = [
            "Projek" => new ExportProjek($this->id),
            "Tugas" => new ExportProjekTugas($this->id)
        ];
        return $sheet;
    }
}
