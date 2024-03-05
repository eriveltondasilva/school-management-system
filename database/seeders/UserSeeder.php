<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Enums\RoleEnum;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        $erivelton = User::factory()->create([
            'username' => 'erivelton',
            'email' => 'eriveltondasilva13@gmail.com',
            'password' => '12345678',
        ]);
        $erivelton->assignRole(RoleEnum::TEACHER);


        $maria = User::factory()->create([
            'username' => 'maria',
            'email' => 'maria@gmail.com',
            'password' => '12345678',
        ]);
        $maria->assignRole(RoleEnum::TEACHER);

        User::factory()->count(10)->create()->each(function ($user) {
            $user->assignRole(RoleEnum::DEFAULT);
        });
    }
}
