<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\{BelongsToMany, HasMany, MorphOne};

// ====================================

class Teacher extends Model
{
    use HasFactory;

    protected $table = 'teachers';

    // ------------------------------
    // #Relationships
    // ------------------------------

    public function scopeIsActive($query) {
        return $query->where('is_active', 1);
    }

    //

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
