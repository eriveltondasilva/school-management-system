<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Illuminate\Database\Seeder;
use App\Models\Teacher;
use App\Models\Group;

class TeacherSeeder extends Seeder
{
    public function run(): void
    {
        $teachers = Teacher::factory()->count(10)->create();

        Group::find(1)->teachers()->attach($teachers);

        Teacher::factory()->count(5)->create(['is_active' => false]);
    }
}
