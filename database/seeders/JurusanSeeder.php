<?php

namespace Database\Seeders;

use App\Models\Jurusan;
use Illuminate\Database\Seeder;

class JurusanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $jurusan = ["RPL", "DKV 1", "DKV 2", "TKP", "TP", "KR"];
        $keterangan = ["Rekayasa Perangkat Lunak", "Desain Komunikasi Visual 1", "Desain Komunikasi Visual 2", "Teknik Konstruksi Perumahan", "Teknik Pengelasan", "Kuliner"];

        foreach ($jurusan as $j => $jrs) {
            Jurusan::create([
                "jurusan" => $jrs,
                "keterangan" => $keterangan[$j]
            ]);
        }
    }
}
