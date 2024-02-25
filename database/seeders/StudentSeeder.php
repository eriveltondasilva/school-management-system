<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Student;

class StudentSeeder extends Seeder
{
    public function run(): void
    {
        Student::factory()->count(100)->create();

        // $maria = User::factory()
        // ->for(
        //     Student::factory(),
        //     'profile'
        // )
        // ->create([
        //     'name' => 'Maria',
        //     'email' => 'maria@gmail.com',
        //     'gender' => 'F',
        //     'role_id' => '4',
        // ]);

        // $group = Group::find(1);
        // $maria->profile->groups()->attach($group);

        // //
        // User::factory()
        // ->count(10)
        // ->sequence(
        //     ['gender' => 'M'],
        //     ['gender' => 'F'],
        // )
        // ->create([
        //     'role_id' => '4'
        // ])->each(function ($user) {
        //     $student = Student::factory()->create();
        //     $user->profile()->associate($student);
        //     $user->save();
        // });
    }
}
