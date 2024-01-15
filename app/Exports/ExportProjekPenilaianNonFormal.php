<?php

namespace App\Exports;

use App\Models\PenilaianNonFormal;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithTitle;

class ExportProjekPenilaianNonFormal implements FromCollection, WithHeadings, WithTitle
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
        return "Penilaian Projek Nonformal";
    }
    public function collection()
    {
        $id = $this->id;
        $data = PenilaianNonFormal::whereHas("indikator.projek", function ($q) use ($id) {
            $q->where("id_projek", $id);
        });
        return $data->get();
    }

    public function headings(): array
    {
        return ["id", "id_penilaian", "id_indikator", "nilai", "created_at", "updated_at"];
    }
}
