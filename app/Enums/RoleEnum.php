<?php

namespace App\Enums;

use App\Traits\EnumTrait;

enum RoleEnum: int
{
    use EnumTrait;

    case ADMINISTRATOR = 1;  // administrador(a)
    case COORDINATOR   = 2;  // coordenador(a)
    case TEACHER       = 3;  // professor(a)
    case STUDENT       = 4;  // estudante
    case USER          = 5;  // usuário

    // ####
    public const DEFAULT = self::USER;

    public static function default(): static
    {
        return self::DEFAULT;
    }


    // ####
    public function trans(): string
    {
        return match($this) {
            self::ADMINISTRATOR => 'administrador(a)',
            self::COORDINATOR => 'coordenador(a)',
            self::TEACHER => 'professor(a)',
            self::STUDENT => 'estudante',
            default => 'usuário(a)',
        };
    }

    // ####
    public function abbr(): string
    {
        return match($this) {
            self::ADMINISTRATOR => 'admin',
            self::COORDINATOR => 'coord',
            self::TEACHER => 'prof',
            self::STUDENT => 'estud',
            default => 'usuário',
        };
    }
}
