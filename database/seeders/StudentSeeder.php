<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Group;
use Illuminate\Database\Seeder;
use App\Models\Student;


class StudentSeeder extends Seeder
{
    public function run(): void
    {
        $students = Student::factory()->count(20)->create();

        $studentsIds = $students->pluck('id')->take(10);
        Group::find(1)->students()->attach($studentsIds);

    }
}
