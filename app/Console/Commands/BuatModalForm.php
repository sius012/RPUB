<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class BuatModalForm extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:modal {model}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Membuat modal form berdasarkan model';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $nama = $this->argument('model');
        $modelName = "App\Models\\$nama";
        if (class_exists("App\Models\\$nama")) {
            $model = new $modelName();
            $field = $model->getFillable();

            //tablename 
            $tablename = $model->getTable();

            $formgroup = [];


            foreach ($field as $f => $fd) {
                //Mendapatkan tipe kolom
                // $columnType = DB::statement("SELECT $fd, data_type
                // FROM information_schema.columns
                // WHERE TABLE_SCHEMA = 'rubi'
                // WHERE table_name = '$tablename' and column_name=$fd;
                // ");

                $column =  DB::select(DB::raw("SHOW COLUMNS FROM $tablename WHERE Field = '$fd'"));
                if (isset($column[0])) {
                    //render form
                    $strlocal = "<div class='form-group mb-3' draggable='true'>";
                    $type = "text";
                    if (strstr($fd, "_id") or strstr($fd, "id_")) {
                        $type = "hidden";
                    } else {
                        $strlocal .= "<label class='form-label'>$fd</label>";
                    }
                    $clm = $column[0]->Type;
                    switch ($this->checkType($column[0]->Type)) {
                        case 'enum':
                            $strlocal .= "<select class='form-select' name='$fd'>";
                            $dataenum = $this->checkType($clm, ["onlybool" => false]);
                            foreach ($dataenum as $i => $de) {
                                $strlocal .= "<option value='$de'>$de</option>";
                            }
                            $strlocal .= "</select>";
                            break;

                        default:
                            $strlocal .= "<input class='form-control' name='$fd' type='$type'>";
                            break;
                    }
                    $strlocal .= "</div>";
                    array_push($formgroup, $strlocal);
                }
            }

            $modal = '<!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalform">
              Launch static backdrop modal
            </button>
            
            <!-- Modal -->
            <div class="modal fade"  id="modalform" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Form ' . $nama . '</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    ' . join("
                    ", $formgroup) . '
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Understood</button>
                  </div>
                </div>
              </div>
            </div>';
            file_put_contents(resource_path("/views/maincomponent//$nama" . "Modal.blade.php"), $modal);
        }
    }

    function checkType($enum, $params = ["onlybool" => true])
    {
        preg_match('/^enum\((.*)\)$/', $enum, $matches);

        if (!empty($matches)) {
            if ($params["onlybool"] == true) {
                return "enum";
            }
            $enumOptions = explode(',', $matches[1]);
            $enumValues = array_map(function ($value) {
                return trim($value, "'");
            }, $enumOptions);

            $dataenum = [];
            // Menampilkan daftar nilai pada ENUM
            foreach ($enumValues as $value) {
                array_push($dataenum, $value);
            }
            return $dataenum;
        } else {
            return $enum;
        }
    }
}
