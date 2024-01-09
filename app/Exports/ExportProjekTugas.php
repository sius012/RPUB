<?php

namespace App\Exports;

use App\Models\Tugas;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromQuery;

class ExportProjekTugas implements FromQuery
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
    public function query()
    {
        return Tugas::query()->where("id_projek", $this->id);
    }
}
