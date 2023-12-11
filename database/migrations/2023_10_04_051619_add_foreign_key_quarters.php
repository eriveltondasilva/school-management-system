<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    public function up(): void
    {
        Schema::table('quarters', function (Blueprint $table) {
            $table->foreign('academic_year_id')->references('id')->on('academic_years');
        });
    }

    // ####

    public function down(): void
    {
        //
    }

};
