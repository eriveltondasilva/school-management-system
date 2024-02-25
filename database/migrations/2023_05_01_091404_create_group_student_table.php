<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    public function up(): void
    {
        Schema::create('group_student', function (Blueprint $table) {
            $table->foreignId('group_id')->constrained()->comment('ID do grupo');
            $table->foreignId('student_id')->constrained()->comment('ID do estudante');
            //
            $table->timestamps();
            $table->primary(['group_id','student_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('group_student');
    }
};
