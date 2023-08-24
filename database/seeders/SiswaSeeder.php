<?php

namespace Database\Seeders;

use App\Models\Siswa;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class SiswaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        for($i = 0 ;$i < 100; $i++){
            Siswa::create([
                'nis'=>'NIS' . $faker->unique()->numberBetween(1000,9999),
                'nama'=> $faker->name,
                'jk'=> $faker->randomElement(['Laki-laki','Perempuan']),
                'id_angkatan'=> rand(1,10),
                'id_jurusan'=> rand(1,6),
                'kelas' => 'Kelas' . rand(18,12) . '-' . chr(rand(65,67)),
                'fotoprofil'=> 'default.jpg',
                'email'=> $faker->unique()->safeEmail(),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
            