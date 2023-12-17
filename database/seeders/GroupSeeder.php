<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
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
    }
}
