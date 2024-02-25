<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    public function up(): void
    {
        Schema::create('subjects', function (Blueprint $table) {
            $table->id();
            $table->string('name')->comment('Nome da matéria');
            $table->string('abbr', 10)->nullable()->comment('Abreviação da matéria');
            //
            $table->unsignedBigInteger('teacher_id')->nullable()->comment('ID do professor responsável pela matéria');
            $table->unsignedBigInteger('academic_year_id')->nullable()->comment('Ano acadêmico da matéria');
            //
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('subjects');
    }
};
