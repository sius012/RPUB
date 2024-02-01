<?php

namespace Database\Seeders;

use App\Models\Jurusan;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\Models\Jenis;
class JenisSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        $jurusan = Jurusan::all();
        foreach ($jurusan as $jrs) {
           for($i = 0;$i < 10; $i++){
                $jenis = new Jenis();
                $jenis->nama = $faker->word;
                $jenis->tipe = $faker->randomElement(["tugas","grup"]);
                $jenis->id_jurusan = $jrs->id;
                $jenis->icon = "default.jpg";
                $jenis->save();
           }
        }
    }
}
