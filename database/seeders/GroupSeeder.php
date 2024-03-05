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
        $activeAcademicYear = AcademicYear::isActive()->first();

        DB::table('groups')->insert([
            [
                'name' => '6° Ano',
                'classroom' => 'Sala 1',
                'shift' => 'Vespertino',
                'created_at' => now(),
                'updated_at' => now(),
                //
                'academic_year_id' => $activeAcademicYear->id,
            ],
            [
                'name' => '7° Ano',
                'classroom' => 'Sala 2',
                'shift' => 'Vespertino',
                'created_at' => now(),
                'updated_at' => now(),
                //
                'academic_year_id' => $activeAcademicYear->id,
            ],
            [
                'name' => '8° Ano',
                'classroom' => 'Sala 3',
                'shift' => 'Vespertino',
                'created_at' => now(),
                'updated_at' => now(),
                //
                'academic_year_id' => $activeAcademicYear->id,
            ],
            [
                'name' => '9° Ano',
                'classroom' => 'Sala 4',
                'shift' => 'Vespertino',
                'created_at' => now(),
                'updated_at' => now(),
                //
                'academic_year_id' => $activeAcademicYear->id,
            ],
        ]);
    }
}
