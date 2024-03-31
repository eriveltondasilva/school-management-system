<?php

namespace App\Enums;

/* Enumeração para os papéis dos usuários. */
enum RoleEnum: string
{
    case ADMIN   = 'admin';    // administrador(a)
    case TEACHER = 'teacher';  // professor(a)
    case STUDENT = 'student';  // estudante
    case USER    = 'user';     // usuário(a)

    public const DEFAULT = self::USER;

    /* Retorna um rótulo com base no papel do usuário. */
    public function label(): string
    {
        $labelMap = match($this) {
            static::ADMIN   => 'Administrador',
            static::TEACHER => 'Professor',
            static::STUDENT => 'Estudante',
            static::USER    => 'Usuário',
            default         => '',
        };

        return $labelMap;
    }
};
