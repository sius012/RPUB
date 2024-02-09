<?php

namespace App\Exports;

use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use Maatwebsite\Excel\Concerns\WithStyles;

class ExportRaportInformalNonformal implements FromView, WithStyles

{
    /**
     * @return \Illuminate\Support\Collection
     */
    private $data;
    private $siswa;

    public function __construct($data, $siswa)
    {

        $this->data = $data;
        $this->siswa = $siswa;
    }
    public function view(): View
    {
        return view('output.raport_informal_nonformal', ["data" => $this->data, "siswa" => $this->siswa]);
    }

    public function styles(Worksheet $sheet)
    {
        $start = 12;
        $listInformal = ["E", "F", "G", "H", "I", "J", "K", "L", "M", "N"];
        foreach ($listInformal as $li) {
            $sheet->getStyle($li . $start)->getAlignment()->setTextRotation(90);
        }
    }
}
