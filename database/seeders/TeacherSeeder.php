<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\{ Group, Subject, Teacher, User};

class TeacherSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // #Professores
        $erivelton = User::factory()
        ->for(
            Teacher::factory(),
            'profile'
        )
        ->create([
            'name' => 'Erivelton da Silva',
            'email' => 'eriveltondasilva13@gmail.com',
            'gender' => 'M',
            'role_id' => '3',
        ]);


        //
        User::factory()
        ->count(5)
        ->create([
            'role_id' => '3'
        ])->each(function ($user) {
            $teacher = Teacher::factory()->create();
            $user->profile()->associate($teacher);
            $user->save();
        });

        //
        $subject = Subject::find(1);
        $group = Group::find(1);

        $subject->update(['teacher_id' => $erivelton->id]);
        $subject->groups()->attach($group);
        $erivelton->profile->groups()->attach($group);

        //
        $professor2 = User::find(2);
        $subject2 = Subject::find(2);

        $subject2->update(['teacher_id' => $professor2->id]);
        $subject2->groups()->attach($group);
        $professor2->profile->groups()->attach($group);

        //
        $professor3 = User::find(3);
        $subject3 = Subject::find(3);

        $subject3->update(['teacher_id' => $professor3->id]);
        $subject3->groups()->attach($group);
        $professor3->profile->groups()->attach($group);

        //
        $professor4 = User::find(4);
        $subject4 = Subject::find(4);

        $subject4->update(['teacher_id' => $professor4->id]);
        $subject4->groups()->attach($group);
        $professor4->profile->groups()->attach($group);
    }
}
