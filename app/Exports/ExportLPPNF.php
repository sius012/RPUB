<?php

namespace App\Exports;

use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use Maatwebsite\Excel\Concerns\WithColumnWidths;
use Maatwebsite\Excel\Concerns\WithDrawings;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Events\AfterSheet;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use PhpOffice\PhpSpreadsheet\Worksheet\Drawing;



class ExportLPPNF implements FromView,WithDrawings,WithColumnWidths, WithColumnFormatting,WithEvents
{
    /**
     * @return \Illuminate\Support\Collection
     */
    private $data;
    private $pageNumber;

    public function __construct($data, $pn)
    {
        $this->data = $data;
        $this->pageNumber = $pn;
    }
    public function view(): View
    {
        return view('output.lembar_penilaian_projek_non_formal', [
            'penilaian' => $this->data,
            'pageNumber' => $this->pageNumber
        ]);
    }

    
    public function drawings()
    {
        $drawing = new Drawing();
        $drawing->setName('Logo');
        $drawing->setDescription('This is my logo');
        $drawing->setPath(public_path('/logobn/logo.png'));
        $drawing->setHeight(90);
        $drawing->setCoordinates("A2");
        $drawing->setOffsetX(10);
        $drawing->setOffsetY(-10);

        $drawing->setWidth(75);
        $drawing->setHeight(75);

        return [$drawing];
    }

    public function registerEvents(): array{
        return [
            AfterSheet::class=>function(AfterSheet $event){
                $event->sheet->getStyle("E13")->getAlignment()->setWrapText(true);
            }
        ];
    }

    public function columnWidths(): array
    {
        return [
            "A"=>4.67,
            "B"=>11.33,
            "C"=>30.56,
            "D"=>10.89,
            "E"=>10.89,
            "F"=>18.67
        ];
    }

    public function columnFormats(): array
    {
        return [
            'A' => NumberFormat::FORMAT_TEXT,
        ];
    }
}
