<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Role::create(['name' => 'Kepala Sekolah']);

        // Role::create(['name' => 'K3']);

        // Role::create(['name' => 'Unit Bisnis']);
        
        Role::create(['name' => 'Admin']);

        Role::create(['name' => 'Super Admin']);
    }
}
