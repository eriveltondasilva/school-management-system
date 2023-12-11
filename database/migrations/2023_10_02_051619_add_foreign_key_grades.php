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
    }

    // ####

    public function down(): void
    {
        //
    }

};
