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
        $activeAcademicYearId = AcademicYear::isActive()->value('id');

        DB::table('groups')->insert([
            [
                'name' => '6° Ano',
                'classroom' => 'Sala 1',
                'shift' => 'Vespertino',
                'created_at' => now(),
                'updated_at' => now(),
                //
                'academic_year_id' => $activeAcademicYearId,
            ],
            [
                'name' => '7° Ano',
                'classroom' => 'Sala 2',
                'shift' => 'Vespertino',
                'created_at' => now(),
                'updated_at' => now(),
                //
                'academic_year_id' => $activeAcademicYearId,
            ],
            [
                'name' => '8° Ano',
                'classroom' => 'Sala 3',
                'shift' => 'Vespertino',
                'created_at' => now(),
                'updated_at' => now(),
                //
                'academic_year_id' => $activeAcademicYearId,
            ],
            [
                'name' => '9° Ano',
                'classroom' => 'Sala 4',
                'shift' => 'Vespertino',
                'created_at' => now(),
                'updated_at' => now(),
                //
                'academic_year_id' => $activeAcademicYearId,
            ],
        ]);
    }
}
