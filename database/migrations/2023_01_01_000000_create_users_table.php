<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('username')->nullable()->comment('Apelido do usuário');
            $table->string('email')->unique()->comment('E-mail do usuário');
            $table->timestamp('email_verified_at')->nullable()->comment('Data e hora da verificação de e-mail');
            $table->string('password')->comment('Senha do usuário');
            $table->boolean('is_active')->default(true)->comment('Indica se o usuário está ativo');
            //
            $table->string('avatar_url')->nullable()->comment('URL do avatar do usuário');
            $table->string('provider_id')->nullable()->comment('ID do provedor de autenticação externo');
            $table->string('provider_name')->nullable()->comment('Nome do provedor de autenticação externo');
            $table->nullableMorphs('profile')->comment('Perfil do usuário');
            //
            $table->rememberToken();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
