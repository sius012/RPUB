<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use App\Models\Angkatan;
use Maatwebsite\Excel\Concerns\WithTitle;

class ExportProjekDataAngkatan implements FromCollection, WithHeadings, WithTitle
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
        return "Angkatan";
    }
    public function collection()
    {
        $id = $this->id;
        $data = Angkatan::whereHas("siswa.penugasan.tugas", function ($q) use ($id) {
            $q->where('id_projek', $id);
        });
        return $data->get();
    }
    public function headings(): array
    {
        return ['id', 'id_angkatan', 'keterangan', 'dari', 'sampai', 'created_at', 'updated_at'];
    }
}
