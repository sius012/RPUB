<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithHeadings;

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
            "Tugas" => new ExportProjekTugas($this->id),
            "Penugasan" => new ExportProjekPenugasan($this->id),
            "Laporan" => new ExportProjekLaporan($this->id),
            "Penilaian Non Formal" => new ExportProjekPenilaianNonFormal($this->id),
            "Penilaian Informal" => new ExportProjekPenilaianInformal($this->id),
            "Penilaian" => new ExportProjekPenilaian($this->id),
            "Siswa" => new ExportProjekDataSiswa($this->id),
            "Jurusan" => new ExportProjekDataJurusan($this->id),
            "Angkatan" => new ExportProjekDataAngkatan($this->id),
            "Penanggung Jawab" => new ExportProjekDataPenanggungJawab($this->id)
        ];
        return $sheet;
    }
}
