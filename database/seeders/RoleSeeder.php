<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Enums\RoleEnum;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // #Funções
        DB::table('roles')->insert([
         [
             'name' => RoleEnum::ADMINISTRATOR->label(),
             'created_at' => now(),
         ],
         [
             'name' => RoleEnum::COORDINATOR->label(),
             'created_at' => now(),
         ],
         [
             'name' => RoleEnum::TEACHER->label(),
             'created_at' => now(),
         ],
         [
             'name' => RoleEnum::STUDENT->label(),
             'created_at' => now(),
         ],
         [
             'name' => RoleEnum::USER->label(),
             'created_at' => now(),
         ],
            ]);
    }
}
