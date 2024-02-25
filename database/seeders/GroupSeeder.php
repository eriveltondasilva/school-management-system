<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\AcademicYear;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GroupSeeder extends Seeder
{
    public function run(): void
    {
        $currentAcademicYear = AcademicYear::where('is_current', true)->first();

        DB::table('groups')->insert([
            [
                'name' => '6° ano',
                'academic_year_id' => $currentAcademicYear->id,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => '7° ano',
                'academic_year_id' => $currentAcademicYear->id,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => '8° ano',
                'academic_year_id' => $currentAcademicYear->id,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => '9° ano',
                'academic_year_id' => $currentAcademicYear->id,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
