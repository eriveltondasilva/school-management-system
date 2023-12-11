<?php

namespace App\Traits;

trait EnumTrait
{
    public function names(): array
    {
        return array_map(fn ($case) => $case->name, self::cases());
    }

    public function values(): array
    {
        return array_map(fn ($case) => $case->value, self::cases());
    }
}