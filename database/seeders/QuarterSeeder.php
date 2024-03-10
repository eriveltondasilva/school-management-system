<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\AcademicYear;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class QuarterSeeder extends Seeder
{
    public function run(): void
    {
        $academicYears = AcademicYear::all();

        foreach ($academicYears as $year) {
            $year->quarters()->createMany([
                [
                    'name' => '1° Trimestre',
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
                [
                    'name' => '2° Trimestre',
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
                [
                    'name' => '3° Trimestre',
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
                [
                    'name' => '4° Trimestre',
                    'created_at' => now(),
                    'updated_at' => now(),
                ],
            ]);
        }
    }
}
