<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\{BelongsToMany, MorphOne};

// ====================================

class Student extends Model
{
    use HasFactory;

    protected $table = 'students';

    protected $fillable = [
        'name',
        'email',
        'cpf',
        'rg',
        'phone',
        'gender',
        'birthday',
        'birthplace',
        'address_street',
        'address_city',
        'address_state',
        'address_zip_code',
        'gov_benefits',
        'health_problems',
        'note',
    ];

    // ------------------------------
    // #Relationships
    // ------------------------------

    public function user(): MorphOne
    {
        return $this->morphOne(User::class, 'profile');
    }

    public function groups(): BelongsToMany
    {
        return $this->belongsToMany(Group::class);
    }
}
