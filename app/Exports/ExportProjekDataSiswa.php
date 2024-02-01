<?php

namespace App\Exports;

use App\Models\Penugasan;
use App\Models\Siswa;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithTitle;

class ExportProjekDataSiswa implements FromCollection, WithHeadings, WithTitle
{
    /**
     * @return \Illuminate\Support\Collection
     */
    private $id;
    public function __construct($id)
    {
        $this->id = $id;
    }
    public function title(): string
    {
        return "Partisipan";
    }
    public function collection()
    {
        $id = $this->id;
        $datasiswa = Siswa::whereHas("penugasan.tugas", function ($q) use ($id) {
            $q->where("id_projek", $id);
        });
        return $datasiswa->get();
    }

    public function headings(): array
    {
        return ["id", "nis", "nama", "jk", "id_angkatan", "id_jurusan", "kelas", "fotoprofil", "password", "email", "created_at", "updated_at"];
    }
}
