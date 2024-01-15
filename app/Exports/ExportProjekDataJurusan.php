<?php

namespace App\Exports;

use App\Models\Angkatan;
use App\Models\Jurusan;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithTitle;

class ExportProjekDataJurusan implements FromCollection, WithTitle, WithHeadings
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
        return "Jurusan";
    }
    public function collection()
    {
        $id = $this->id;
        $data = Jurusan::whereHas("projekJurusan", function ($q) use ($id) {
            $q->where("id_projek", $id);
        });
        return $data->get();
    }
    public function headings(): array
    {
        return ['id', 'jurusan', 'keterangan', 'created_at', 'updated_at'];
    }
}
