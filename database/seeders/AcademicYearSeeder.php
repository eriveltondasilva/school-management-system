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
            [
                'year' => '2020',
                'start_date' => '2020-01-01',
                'end_date' => '2020-12-31',
                'is_active' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'year' => '2021',
                'start_date' => '2021-01-01',
                'end_date' => '2021-12-31',
                'is_active' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'year' => '2022',
                'start_date' => '2022-01-01',
                'end_date' => '2022-12-31',
                'is_active' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'year' => '2023',
                'start_date' => '2023-01-01',
                'end_date' => '2023-12-31',
                'is_active' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'year' => '2024',
                'start_date' => '2024-01-01',
                'end_date' => '2024-12-31',
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
