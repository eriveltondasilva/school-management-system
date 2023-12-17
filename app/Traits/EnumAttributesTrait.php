<?php

namespace App\Traits;

trait EnumAttributesTrait
{
    /**
     * Retrieve an array of names from the cases array.
     * @return array The array of names.
     */
    public static function names(): array
    {
        return array_column(static::cases(), 'name');
    }

    /**
     * Returns an array of values extracted from the 'value' key of the cases array.
     * @return array The array of values.
     */
    public static function values(): array
    {
        return array_column(static::cases(), 'value');
    }
}
