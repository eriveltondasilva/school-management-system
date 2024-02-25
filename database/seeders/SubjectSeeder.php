<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Enums\SubjectEnum;
use App\Models\AcademicYear;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SubjectSeeder extends Seeder
{
    public function run(): void
    {
        $currentAcademicYear = AcademicYear::where('is_current', true)->first();

        DB::table('subjects')->insert([
            [
                'name' => SubjectEnum::PORTUGUESE->label(),
                'abbr' => SubjectEnum::PORTUGUESE->abbr(),
                'academic_year_id' => $currentAcademicYear->id,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => SubjectEnum::MATHEMATICS->label(),
                'abbr' => SubjectEnum::MATHEMATICS->abbr(),
                'academic_year_id' => $currentAcademicYear->id,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => SubjectEnum::HISTORY->label(),
                'abbr' => SubjectEnum::HISTORY->abbr(),
                'academic_year_id' => $currentAcademicYear->id,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => SubjectEnum::GEOGRAPHY->label(),
                'abbr' => SubjectEnum::GEOGRAPHY->abbr(),
                'academic_year_id' => $currentAcademicYear->id,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => SubjectEnum::ARTS->label(),
                'abbr' => SubjectEnum::ARTS->abbr(),
                'academic_year_id' => $currentAcademicYear->id,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
