<?php

namespace App\Enums;

enum SubjectEnum: int
{
    case PORTUGUESE  = 1;  // português
    case MATHEMATICS = 2;  // matemática
    case HISTORY     = 3;  // história
    case GEOGRAPHY   = 4;  // geografia
    case ARTS        = 5;  // artes

    public function label(): string
    {
        return match($this) {
            self::PORTUGUESE  => 'português',
            self::MATHEMATICS => 'matemática',
            self::HISTORY     => 'história',
            self::GEOGRAPHY   => 'geografia',
            self::ARTS        => 'artes',
        };
    }

    public function abbr(): string
    {
        return match($this) {
            self::PORTUGUESE  => 'LPO',
            self::MATHEMATICS => 'MAT',
            self::HISTORY     => 'HIST',
            self::GEOGRAPHY   => 'GEO',
            self::ARTS        => 'ART',
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
