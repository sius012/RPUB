<?php

namespace App\Exports;

use App\Models\Projek;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithTitle;

class ExportProjek implements FromQuery, WithHeadings, WithTitle
{
    use Exportable;
    private $id;
    public function __construct($id)
    {
        $this->id = $id;
    }

    public function title(): string
    {
        return "Projek";
    }
    public function query()
    {
        return  Projek::query()->where("id", $this->id);
    }
    public function headings(): array
    {
        return ['id', 'nama', 'tanggal_awal', "tanggal_akhir", "id_penanggung_jawab", "jenis_projek", "klien", "nominal", "desksripsi", "lokasi_projek", "status", "id_pembuat", "created_at", "updated_at"];
    }
}
