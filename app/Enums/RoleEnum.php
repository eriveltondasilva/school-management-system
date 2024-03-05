<?php

namespace App\Enums;

use App\Traits\EnumAttributesTrait;

enum RoleEnum: string
{
    use EnumAttributesTrait;

    case ADMIN   = 'administrator';  // administrador(a)
    case COORD   = 'coordinator';    // coordenador(a)
    case TEACHER = 'teacher';        // professor(a)
    case STUDENT = 'student';        // estudante
    case USER    = 'user';           // usuário(a)

    public const DEFAULT = self::USER;

    /**
     * Returns a label based on the role of the user.
     * @return string The label corresponding to the user's role.
     */
    public function label(): string
    {
        return match($this) {
            static::ADMIN   => 'administrador(a)',
            static::COORD   => 'coordenador(a)',
            static::TEACHER => 'professor(a)',
            static::STUDENT => 'estudante',
            static::USER    => 'usuário(a)',
        };
    }
};
