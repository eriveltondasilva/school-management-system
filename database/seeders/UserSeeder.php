<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::factory()->create([
            'nickname' => 'erivelton',
            'email' => 'eriveltondasilva13@gmail.com',
            'password' => '12345678',
        ]);
        User::factory()->create([
            'nickname' => 'maria',
            'email' => 'maria@gmail.com',
            'password' => '12345678',
        ]);

        User::factory()->count(10)->create();
    }
}
