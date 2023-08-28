<?php

namespace Database\Seeders;

use App\Models\Angkatan;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call(AngkatanSeeder::class);
        $this->call(JurusanSeeder::class);
        $this->call(SiswaSeeder::class);
        $this->call(JenisSeeder::class);
    }
}
