<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::factory()->create([
            'username' => 'erivelton',
            'email' => 'eriveltondasilva13@gmail.com',
            'password' => '12345678',
        ]);
        User::factory()->create([
            'username' => 'maria',
            'email' => 'maria@gmail.com',
            'password' => '12345678',
        ]);

        User::factory()->count(10)->create();
    }
}
