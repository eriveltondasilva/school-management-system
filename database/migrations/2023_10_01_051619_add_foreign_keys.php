<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    public function up(): void
    {
        Schema::table('grades', function (Blueprint $table) {
            $table->foreign('quarter_id')->references('id')->on('quarters');
            $table->foreign('subject_id')->references('id')->on('subjects');
            $table->foreign('student_id')->references('id')->on('students');
        });

        Schema::table('subjects', function (Blueprint $table) {
            $table->foreign('academic_year_id')->references('id')->on('academic_years');
            $table->foreign('teacher_id')->references('id')->on('teachers');
        });

        Schema::table('quarters', function (Blueprint $table) {
            $table->foreign('academic_year_id')->references('id')->on('academic_years');
        });

        Schema::table('groups', function (Blueprint $table) {
            $table->foreign('academic_year_id')->references('id')->on('academic_years');
        });
    }

    public function down(): void
    {
        //
    }
};
