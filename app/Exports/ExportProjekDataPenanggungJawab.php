<?php

namespace App\Exports;

use App\Models\User;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithTitle;


class ExportProjekDataPenanggungJawab implements FromCollection, WithTitle, WithHeadings
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
        return "Penanggung Jawab";
    }
    public function collection()
    {
        $id = $this->id;
        $data = User::whereHas("penanggung_jawab", function ($q) use ($id) {
            $q->where("id", $id);
        });
        return $data->get();
    }
    public function headings(): array
    {
        return ["id", "name", "email", "email_verified_at", "password", "created_at", "updated_at"];
    }
}
