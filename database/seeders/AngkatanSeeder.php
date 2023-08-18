<?php

namespace Database\Seeders;

use App\Models\Angkatan;
use Illuminate\Database\Seeder;

class AngkatanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $defaultYear = 2011;
        for($i = 0;$i<10;$i++){
            Angkatan::create([
                "id_angkatan"=>$i+1,
                "keterangan" =>"Test",
                "dari"=>($defaultYear+($i))."-06-03",
                "sampai"=>($defaultYear+($i)+3)."-06-03",
            ]); 
        }
    }
}
