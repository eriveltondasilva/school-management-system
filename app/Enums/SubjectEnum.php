<?php

namespace App\Enums;

use App\Traits\EnumAttributesTrait;

enum SubjectEnum: int
{
    use EnumAttributesTrait;

    case PORTUGUESE  = 1;  // português
    case MATHEMATICS = 2;  // matemática
    case HISTORY     = 3;  // história
    case GEOGRAPHY   = 4;  // geografia
    case ARTS        = 5;  // artes

    /**
     * Returns the label corresponding to the current instance.
     * @return string The label.
     */
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

    /**
     * Generates the abbreviation for the given value.
     * @return string The abbreviation.
     */
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
}
