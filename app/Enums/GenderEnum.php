<?php

namespace App\Enums;

use App\Traits\EnumAttributesTrait;

enum GenderEnum: string
{
    use EnumAttributesTrait;

    case MALE = 'M';
    case FEMALE = 'F';

    public const DEFAULT = self::MALE;

    /**
     * Returns the label corresponding to the value of the object.
     * @return string The label.
     */
    public function label(): string
    {
        return match ($this) {
            self::MALE => 'masculino',
            self::FEMALE => 'feminino',
        };
    }
}
