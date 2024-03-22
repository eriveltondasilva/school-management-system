<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    public function up(): void
    {
        Schema::create('group_student', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            //
            $table->unsignedBigInteger('group_id')->comment('ID do grupo');
            $table->unsignedBigInteger('student_id')->comment('ID do aluno');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('group_student');
    }
};
