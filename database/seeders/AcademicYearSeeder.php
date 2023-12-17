<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AcademicYearSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('academic_years')->insert([
            'id' => 2023,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
