<?php

namespace App\Enums;

enum PermissionEnum: string
{
    case USERS_INDEX  = 'users.index';
    case USERS_CREATE = 'users.create';
    case USERS_EDIT   = 'users.edit';
    case USERS_DELETE = 'users.delete';

    /* Returns a label based on the role of the user. */
    // public function label(): string
    // {
    //     return match($this) {
    //         static::ADMIN   => 'administrador(a)',
    //     };
    // }
};
