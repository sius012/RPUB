<?php

namespace App\Exports;

use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\WithEvents;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use Maatwebsite\Excel\Concerns\WithStyles;
use Maatwebsite\Excel\Events\AfterSheet;
use PhpOffice\PhpSpreadsheet\Style\Border;
use Maatwebsite\Excel\Concerns\WithColumnWidths;
use Maatwebsite\Excel\Concerns\WithProperties;

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Maatwebsite\Excel\Concerns\WithDrawings;
use PhpOffice\PhpSpreadsheet\Shared\Drawing;

class ExportRaportInformalNonformal implements FromView, WithStyles,WithEvents,WithColumnWidths

{
    /**
     * @return \Illuminate\Support\Collection
     */
    private $data;
    private $siswa;
    private $semester;

    public function __construct($data, $siswa,$semester)
    {

        $this->data = $data;
        $this->siswa = $siswa;
        $this->semester = $semester;
    }
    public function view(): View
    {
        return view('output.raport_informal_nonformal', ["data" => $this->data, "siswa" => $this->siswa,"semester"=>$this->semester]);
    }

    public function styles(Worksheet $sheet)
    {
        $start = 12;
        $listInformal = ["E", "F", "G", "H", "I", "J", "K", "L", "M", "N","O","P"];

    
        foreach ($listInformal as $li) {
            $sheet->getStyle($li . $start)->getAlignment()->setTextRotation(90);
        }
       
       
    }

    public function columnWidths(): array
    {
        return [
            "A"=>4.67,
            "B"=>9.89,  
            "C"=>28.11,
            "D"=>4.56,
            "E"=>40.33,
            "F"=>19.89,
            "G"=>3,
            "H"=>3,
            "I"=>3,  
            "J"=>3,
            "K"=>3,
            "L"=>3,
            "M"=>3,
            "N"=>4.11,
            "O"=>24.67

        ];
    }

    

    public function properties(): array
    {
        return [
            "printArea"=>"A1:O30"
        ];
    }

    public function registerEvents(): array
    {
        $dataNilai = $this->data;
        return [
            AfterSheet::class    => function(AfterSheet $event) use ($dataNilai){
                $countRow = 0;
                foreach ($dataNilai as $data) {
                    foreach ($data->tugas as $tugas) {
                        $countRow += 1;
                    }
                }
                $styleArray = [
                    "borders"=>[
                        'top' => ['borderStyle' => Border::BORDER_MEDIUM],    // Thick border on the top
                        'right' => ['borderStyle' => Border::BORDER_MEDIUM],  // Thick border on the right
                        'left' => ['borderStyle' => Border::BORDER_MEDIUM],   // Thick border on the left
                        'bottom' => ['borderStyle' => Border::BORDER_THIN],
                    ]
                        ];
                
                  


                        $start = 12;
                        $listInformal = ["E", "F", "G", "H", "I", "J", "K", "L", "M", "N","O","P"];

                    
                        foreach ($listInformal as $li) {
                            $event->sheet->getStyle($li . $start)->getAlignment()->setTextRotation(90);
                        }
                        //Kasih tabel border
                
                        $event->sheet->getStyle("F11")->getAlignment()->setWrapText(true);
                        $event->sheet->getStyle("A11:O12")->getFont()->setBold(true);
            },
        ];
    }

    
}
