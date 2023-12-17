<?php

namespace App\Enums;

enum RoleEnum: int
{
    case ADMINISTRATOR = 1;  // administrador(a)
    case COORDINATOR   = 2;  // coordenador(a)
    case TEACHER       = 3;  // professor(a)
    case STUDENT       = 4;  // estudante
    case USER          = 5;  // usuário(a)

    public const DEFAULT = self::USER;

    public function label(): string
    {
        return match($this) {
            self::ADMINISTRATOR => 'administrador(a)',
            self::COORDINATOR   => 'coordenador(a)',
            self::TEACHER       => 'professor(a)',
            self::STUDENT       => 'estudante',
            default             => 'usuário(a)',
        };
    }

    public static function names(): array
    {
        return array_column(static::cases(), 'name');
    }

    public static function values(): array
    {
        return array_column(static::cases(), 'value');
    }
};
