<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Enums\SubjectEnum;
use App\Models\Subject;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SubjectSeeder extends Seeder
{
    public function run(): void
    {

        DB::table('subjects')->insert([
            [
                'name' => SubjectEnum::PORTUGUESE->label(),
                'abbr' => SubjectEnum::PORTUGUESE->abbr(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => SubjectEnum::MATHEMATICS->label(),
                'abbr' => SubjectEnum::MATHEMATICS->abbr(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => SubjectEnum::HISTORY->label(),
                'abbr' => SubjectEnum::HISTORY->abbr(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => SubjectEnum::GEOGRAPHY->label(),
                'abbr' => SubjectEnum::GEOGRAPHY->abbr(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => SubjectEnum::ARTS->label(),
                'abbr' => SubjectEnum::ARTS->abbr(),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
