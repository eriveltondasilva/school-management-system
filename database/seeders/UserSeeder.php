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
        DB::table('users')->insert([
            'nickname' => 'Erivelton',
            'email' => 'eriveltondasilva13@gmail.com',
            'gender' => 'M',
            'password' => '12345678',
        ]);

        User::factory()->count(50)->create();
    }
}
