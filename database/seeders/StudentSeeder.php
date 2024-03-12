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
        $group1Students = Student::factory()->count(10)->create();
        $group2Students = Student::factory()->count(10)->create();
        Student::factory()->count(10)->create();

        $group1StudentsIds = $group1Students->pluck('id');
        $group2StudentsIds = $group2Students->pluck('id');

        Group::find(1)->students()->attach($group1StudentsIds);
        Group::find(2)->students()->attach($group2StudentsIds);
    }
}
