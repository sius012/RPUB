<?php

namespace Database\Seeders;

use App\Models\Siswa;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\Hash;

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
                'nis'=>$faker->unique()->numberBetween(1000,9999),
                'nama'=> $faker->name,
                'jk'=> $faker->randomElement(['Laki-laki','Perempuan']),
                'id_angkatan'=> rand(1,10),
                'id_jurusan'=> rand(1,6),
                'kelas' => rand(1,3),
                'fotoprofil'=> 'default.jpg',
                'email'=> $faker->unique()->safeEmail(),
                'password'=>Hash::make("password"),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
            