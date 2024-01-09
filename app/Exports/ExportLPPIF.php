<?php

namespace App\Exports;


use Maatwebsite\Excel\Concerns\FromView;
use Illuminate\Contracts\View\View;

class ExportLPPIF implements FromView
{
    /**
     * @return \Illuminate\Support\Collection
     */
    private $data;
    public function __construct($data)
    {
        $this->data = $data;
    }
    public function view(): View
    {
        return view("output.lembar_penilaian_projek_informal", ["penilaian" => $this->data]);
    }
}
