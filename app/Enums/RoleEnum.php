<?php

namespace App\Enums;

use App\Traits\EnumAttributesTrait;

enum RoleEnum: int
{
    use EnumAttributesTrait;

    case ADMINISTRATOR = 1;  // administrador(a)
    case COORDINATOR   = 2;  // coordenador(a)
    case TEACHER       = 3;  // professor(a)
    case STUDENT       = 4;  // estudante
    case USER          = 5;  // usuário(a)

    public const DEFAULT = self::USER;

    /**
     * Returns a label based on the role of the user.
     * @return string The label corresponding to the user's role.
     */
    public function label(): string
    {
        return match($this) {
            self::ADMINISTRATOR => 'administrador(a)',
            self::COORDINATOR   => 'coordenador(a)',
            self::TEACHER       => 'professor(a)',
            self::STUDENT       => 'estudante',
            self::USER          => 'usuário(a)',
        };
    }
};
