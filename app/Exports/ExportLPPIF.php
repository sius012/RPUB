<?php

namespace App\Exports;


use Maatwebsite\Excel\Concerns\FromView;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\WithColumnWidths;
use Maatwebsite\Excel\Concerns\WithDrawings;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\AfterSheet;
use PhpOffice\PhpSpreadsheet\Worksheet\Drawing;

use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Style\Border;
use PhpOffice\PhpSpreadsheet\Style\Fill;


class ExportLPPIF implements FromView,WithColumnWidths,WithEvents,WithDrawings
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
        return view("output.lembar_penilaian_projek_informal", ["penilaian" => $this->data, "pageNumber" => $this->pageNumber]);
    }

    public function columnWidths(): array
    {
        return [
            "A"=>4.67,
            "B"=>11.33,
            "C"=>32.56,
            "D"=>10.89,
            "E"=>10.89,
            "F"=>18.67
        ];
    }

    public function registerEvents(): array{
        return [
            AfterSheet::class=>function(AfterSheet $event){
                $event->sheet->getStyle("A6:F40")->getFont()->setName('Times New Roman');

                $column = ["A","B","C","D","E","F"];

                foreach ($column as $i => $col) {
                    for($row = 13;$row <= 23;$row++){
                        $borderStyle = [
                            'borders' => [
                                'allBorders' => [
                                    'borderStyle' => Border::BORDER_THIN,
                                    'color' => ['argb' => '000000'], // Black color
                                ],
                            ],
                        ];
                        if($i<2 and $row>13 and $row<23){
                            $borderStyle = [
                                'borders' => [
                                    'right' => [
                                        'borderStyle' => Border::BORDER_THIN,
                                        'color' => ['argb' => '000000'],
                                    ],
                                    'left' => [
                                        'borderStyle' => Border::BORDER_THIN,
                                        'color' => ['argb' => '000000'],
                                    ],
                                ]];
                        }
                        $event->sheet->getStyle($col.$row)->applyFromArray($borderStyle);
                    }
                }
                $event->sheet->getStyle("D13:E13")->getAlignment()->setWrapText(true);
                $event->sheet->getStyle('A13:F13')->getAlignment()->setVertical(Alignment::VERTICAL_CENTER);
                $event->sheet->getStyle('A13:F13')->getFont()->setBold(true);
                $event->sheet->getStyle('A13:F13')->getFill()->setFillType(Fill::FILL_SOLID);
                $event->sheet->getStyle('A13:F13')->getFill()->getStartColor()->setRGB('F2F2F2');
                

            }
        ];
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
    
}
