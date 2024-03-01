<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    public function up(): void
    {
        Schema::create('academic_years', function (Blueprint $table) {
            $table->id();
            $table->integer('year')->unique()->comment('ID do ano acadêmico');
            $table->date('start_date')->nullable()->comment('Data de início do ano acadêmico');
            $table->date('end_date')->nullable()->comment('Data de término do ano acadêmico');
            $table->boolean('is_current')->default(false)->comment('Indica se é o ano atual');
            //
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('academic_years');
    }
};
