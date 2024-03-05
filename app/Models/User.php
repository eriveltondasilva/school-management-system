<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

// ====================================
class User extends Authenticatable
{
    use HasApiTokens;
    use HasFactory;
    use Notifiable;
    use HasRoles;

    protected $table = 'users';

    protected $fillable = [
        'username',
        'email',
        'password',
        'is_active',
        'avatar_url',
        'provider_id',
        'provider_name',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'is_active'         => 'boolean',
        'email_verified_at' => 'datetime',
        'password'          => 'hashed',
    ];

    // ------------------------------
    // #Relationships
    // ------------------------------

    public function scopeIsActive($query)
    {
        return $query->where('is_active', true);
    }

    public function profile(): MorphTo
    {
        return $this->morphTo();
    }
}
