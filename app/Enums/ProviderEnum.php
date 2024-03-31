<?php

namespace App\Enums;

/* Enumeração para os provedores de autenticação. */
enum ProviderEnum: string
{
    case GOOGLE    = 'google';
    case INSTAGRAM = 'instagram';
}
