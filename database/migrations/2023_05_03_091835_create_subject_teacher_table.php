<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    public function up(): void
    {
        Schema::create('subject_teacher', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            //
            $table->unsignedBigInteger('subject_id')->comment('ID da disciplina');
            $table->unsignedBigInteger('teacher_id')->comment('ID da professor');
            $table->unsignedBigInteger('academic_year_id')->nullable()->comment('ID do ano acadêmico');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('group_subject');
    }
};
