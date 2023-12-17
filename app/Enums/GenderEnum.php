<?php

namespace App\Enums;

enum GenderEnum: string
{
    case MALE = 'M';
    case FEMALE = 'F';

    public function label(): string
    {
        return match ($this) {
            self::MALE => 'masculino',
            self::FEMALE => 'feminino',
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
}
