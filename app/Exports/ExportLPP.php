<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use App\Exports\ExportLPPIF;
use App\Exports\ExportLPPNF;

class ExportLPP implements WithMultipleSheets
{
    /**
     * @return \Illuminate\Support\Collection
     */
    use Exportable;
    private $data;
    public function __construct($data)
    {
        $this->data = $data;
    }

    public function sheets(): array
    {
        $sheets = [];

        // Add sheets as needed
        $sheets[] = new ExportLPPNF($this->data);
        $sheets[] = new ExportLPPIF($this->data);


        return $sheets;
    }
}
