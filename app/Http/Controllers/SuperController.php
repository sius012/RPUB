<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class SuperController extends Controller
{
    public function index()
    {
        $table = DB::select('SHOW TABLES');

        $tablelist = [];


        foreach ($table as $t => $tb) {
            $modelName = ($tb->Tables_in_rubi);
            $str = "DB::table('$modelName')->insert([";
            $kolom = Schema::getColumnListing($tb->Tables_in_rubi);
            $data = DB::table($tb->Tables_in_rubi)->get();
            foreach ($data as $i => $ds) {
                $str .= "[";
                foreach ($ds as $j => $klm) {
                    $delimiter = $j == "password"  ? "'" : '"';
                    if ($klm != null) {
                        $str .= '"' . $j . '"' . ' => ' . $delimiter . $klm       . $delimiter . ",";
                    }
                }
                $str .= "]";
                if (isset($data[$i + 1])) {
                    $str .= ",
                    ";
                }
            }
            $str .= "]);
            
            ";

            if ($data->count() > 0 and $modelName != "migrations") {
                $tablelist[$t] = $str;
            }
        }
        $contentfile = "<?php

        namespace Database\Seeders;
        
        use App\Models\Siswa;
        use Illuminate\Database\Seeder;
        use Illuminate\Support\Facades\DB;

        
        class MasterSeeder extends Seeder
        {
            /**
             * Run the database seeds.
             *
             * @return void
             */
            public function run()
            {
                  
                DB::statement('SET FOREIGN_KEY_CHECKS=0');
                " . implode("
                ", $tablelist) .
            "}
            }";

        file_put_contents(database_path('seeders/MasterSeeder.php'), $contentfile);

        return response()->json(['message' => 'File generated successfully']);
    }


    function snakeToPascalCase($input)
    {
        $words = explode('_', $input);
        $pascalCaseWords = array_map('ucfirst', $words);
        $pascalCase = implode('', $pascalCaseWords);

        return $pascalCase;
    }
}
