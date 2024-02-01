<?php

namespace App\Exports;

use App\Models\PenilaianInformal;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithTitle;
use PenilaianProjek;

class ExportProjekPenilaianInformal implements FromCollection, WithHeadings, WithTitle
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
        return "Penilaian Informal";
    }
    public function collection()
    {
        $id = $this->id;
        $data = PenilaianInformal::whereHas("penilaian.tugas.projek", function ($q) use ($id) {
            $q->where("id", $id);
        });
        return $data->get();
    }
    public function headings(): array
    {
        return ['id', 'id_penilaian', 'inisiatif', 'antusias', 'kejujuran', 'kreativitas', 'tanggung_jawab', 'komunikasi', 'kedisiplinan', 'etika_sopansantun', 'k3', 'created_at', 'updated_at'];
    }
}
