<?php

namespace App\Models;

use App\Models\Scopes\IsActiveScope;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\{BelongsToMany, HasMany, MorphOne};

// ====================================

class Teacher extends Model
{
    use HasFactory;

    protected $table = 'teachers';

    protected $fillable = [
        'name',
        'gender',
        'cpf',
        'rg',
        'birthday',
        'email',
        'phone',
        // Address
        'address_street',
        'address_city',
        'address_state',
        'address_zip_code',
    ];


    // ------------------------------
    // ### Scope ###
    // ------------------------------

    protected static function booted(): void
    {
        static::addGlobalScope(new IsActiveScope());
    }

    // ------------------------------
    // ### Relationships ###
    // ------------------------------

    public function user(): MorphOne
    {
        return $this->morphOne(User::class, 'profile');
    }

    public function subjects(): HasMany
    {
        return $this->hasMany(Subject::class);
    }

    public function groups(): BelongsToMany
    {
        return $this->belongsToMany(Group::class);
    }
}
