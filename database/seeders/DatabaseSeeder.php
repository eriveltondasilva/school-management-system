<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Enums\{
    RoleEnum,
    SubjectEnum,
};
use App\Models\{
    Group,
    Student,
    Subject,
    Teacher,
    User,
};
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // #Ano Letivo
        DB::table('academic_years')->insert([
            'id' => 2023,
            'created_at' => now(),
        ]);

        // #Funções
        DB::table('roles')->insert([
            [
                'name' => RoleEnum::ADMINISTRATOR->trans(),
                'created_at' => now(),
            ],
            [
                'name' => RoleEnum::COORDINATOR->trans(),
                'created_at' => now(),
            ],
            [
                'name' => RoleEnum::TEACHER->trans(),
                'created_at' => now(),
            ],
            [
                'name' => RoleEnum::STUDENT->trans(),
                'created_at' => now(),
            ],
            [
                'name' => RoleEnum::USER->trans(),
                'created_at' => now(),
            ],
        ]);

        // #Disciplinas
        DB::table('subjects')->insert([
            [
                'name' => SubjectEnum::PORTUGUESE,
                'created_at' => now(),
            ],
            [
                'name' => SubjectEnum::MATHEMATICS,
                'created_at' => now(),
            ],
            [
                'name' => SubjectEnum::HISTORY,
                'created_at' => now(),
            ],
            [
                'name' => SubjectEnum::GEOGRAPHY,
                'created_at' => now(),
            ],
            [
                'name' => SubjectEnum::ARTS,
                'created_at' => now(),
            ],
        ]);

        // #Turmas
        DB::table('groups')->insert([
            [
                'name' => '6° ano',
                'created_at' => now(),
            ],
            [
                'name' => '7° ano',
                'created_at' => now(),
            ],
            [
                'name' => '8° ano',
                'created_at' => now(),
            ],
            [
                'name' => '9° ano',
                'created_at' => now(),
            ],
        ]);

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

        // #Estudantes
        $maria = User::factory()
        ->for(
            Student::factory(),
            'profile'
        )
        ->create([
            'name' => 'Maria',
            'email' => 'maria@gmail.com',
            'gender' => 'F',
            'role_id' => '4',
        ]);

        //
        $maria->profile->groups()->attach($group);

        //
        User::factory()
        ->count(10)
        ->sequence(
            ['gender' => 'M'],
            ['gender' => 'F'],
        )
        ->create([
            'role_id' => '4'
        ])->each(function ($user) {
            $student = Student::factory()->create();
            $user->profile()->associate($student);
            $user->save();
        });
    }
}
