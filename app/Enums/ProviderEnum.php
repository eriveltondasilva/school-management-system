<?php

namespace App\Enums;

/**
 * Enum representing authentication providers.
 */
enum ProviderEnum: string
{
    case GOOGLE = 'google';
    case INSTAGRAM = 'instagram';
}
