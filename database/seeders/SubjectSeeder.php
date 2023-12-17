<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Enums\SubjectEnum;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SubjectSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('subjects')->insert([
            [
                'name' => SubjectEnum::PORTUGUESE->label(),
                'created_at' => now(),
            ],
            [
                'name' => SubjectEnum::MATHEMATICS->label(),
                'created_at' => now(),
            ],
            [
                'name' => SubjectEnum::HISTORY->label(),
                'created_at' => now(),
            ],
            [
                'name' => SubjectEnum::GEOGRAPHY->label(),
                'created_at' => now(),
            ],
            [
                'name' => SubjectEnum::ARTS->label(),
                'created_at' => now(),
            ],
        ]);
    }
}
