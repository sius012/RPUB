<?php

namespace App\Exports;

use App\Models\Versi;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithTitle;

class ExportProjekLaporan implements FromCollection, WithHeadings, WithTitle
{
    /**
     * @return \Illuminate\Support\Collection
     */
    private $id;
    public function __construct(int $id)
    {
        $this->id = $id;
    }

    public function title(): string
    {
        return "Laporan";
    }
    public function collection()
    {
        $id = $this->id;
        $data = Versi::whereHas("tugas.projek", function ($q) use ($id) {
            $q->where("id", $id);
        })->get();
        return $data;
    }

    public function headings(): array
    {
        return ["id", "id_tugas", "id_siswa", "nama", "keterangan", "lampiran", "status", "created_at", "updated_at"];
    }
}
