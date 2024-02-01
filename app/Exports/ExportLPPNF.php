<?php

namespace App\Exports;

use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\WithTitle;

class ExportLPPNF implements FromView
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
        return view('output.lembar_penilaian_projek_non_formal', [
            'penilaian' => $this->data
        ]);
    }
}
