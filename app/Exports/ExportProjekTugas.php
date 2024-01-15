<?php

namespace App\Exports;

use App\Models\Tugas;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithTitle;

class ExportProjekTugas implements FromQuery, WithHeadings, WithTitle
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

    public function title(): string
    {
        return "Tugas";
    }
    public function query()
    {
        return Tugas::query()->where("id_projek", $this->id);
    }

    public function headings(): array
    {
        return ['id', 'nama', 'keterangan', "id_projek", "id_parent", "tanggal_awal", "tanggal_akhir", "status", "nilai_max", "created_at", "updated_at"];
    }
}
