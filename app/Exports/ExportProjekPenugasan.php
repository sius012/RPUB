<?php

namespace App\Exports;

use App\Models\Penugasan;
use Illuminate\Support\Arr;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithTitle;

class ExportProjekPenugasan implements FromCollection, WithHeadings, WithTitle
{

    use Exportable;
    private $id;
    /**
     * @return \Illuminate\Support\Collection
     */
    public function __construct($id)
    {
        $this->id = $id;
    }

    public function title(): string
    {
        return "Penugasan";
    }
    public function collection()
    {
        $id = $this->id;
        $data =  Penugasan::with("siswa")->whereHas("tugas.projek", function ($q) use ($id) {
            $q->where("id", $id);
        })->get();
        $data = $data->map(function ($e) {
            $e->nama_siswa = $e->siswa->nama;
            return $e;
        });

        return $data;
    }
    public function headings(): array
    {
        return ["id", "id_tugas", "id_siswa", "id_penugas", "keterangan", "created_at", "updated_at", "nama_siswa"];
    }
}
