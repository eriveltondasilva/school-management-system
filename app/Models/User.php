<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\{
    BelongsTo,
    MorphTo,
};
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

// ------------------------------

class User extends Authenticatable
{
    use HasApiTokens;
    use HasFactory;
    use Notifiable;

    protected $table = 'users';

    protected $fillable = [
        'name',
        'email',
        'gender',
        'password',
        'status',
        'avatar_url',
        'provider_id',
        'provider_name',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'status' => 'boolean',
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    // ------------------------------
    // #Relationships
    // ------------------------------

    public function role(): BelongsTo
    {
        return $this->belongsTo(Role::class);
    }

    // ####
    public function profile(): MorphTo
    {
        return $this->morphTo();
    }

}