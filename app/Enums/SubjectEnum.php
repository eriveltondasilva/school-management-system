<?php

namespace App\Enums;

enum SubjectEnum: string
{
    case PORTUGUESE = 'português';
    case MATHEMATICS = 'matemática';
    case HISTORY = 'história';
    case GEOGRAPHY = 'geografia';
    case ARTS = 'artes';

    public function abbr(): string
    {
        return match($this) {
            self::PORTUGUESE => 'LPO',
            self::MATHEMATICS => 'MAT',
            self::HISTORY => 'HIST',
            self::GEOGRAPHY => 'GEO',
            self::ARTS => 'ART',
        };
    }
}
