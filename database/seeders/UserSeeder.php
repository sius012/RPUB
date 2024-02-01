<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'name' => 'Akun Admin',
            'email' => 'admin@example.com',
            'password' => Hash::make('password'), // Hashed password
        ]);

        $superadmin = User::create([
            'name' => 'Akun Super Admin',
            'email' => 'superadmin@example.com',
            'password' => Hash::make('password'), // Hashed password
        ]);

        $superadmin->assignRole("Super Admin");

        $user->assignRole("Admin");
    }
}
