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
                'name' => '6° Ano',
                'academic_year_id' => $currentAcademicYear->id,
                'classroom' => 'Sala 1',
                'shift' => 'Vespertino',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => '7° Ano',
                'academic_year_id' => $currentAcademicYear->id,
                'classroom' => 'Sala 2',
                'shift' => 'Vespertino',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => '8° Ano',
                'academic_year_id' => $currentAcademicYear->id,
                'classroom' => 'Sala 3',
                'shift' => 'Vespertino',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => '9° Ano',
                'academic_year_id' => $currentAcademicYear->id,
                'classroom' => 'Sala 4',
                'shift' => 'Vespertino',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
