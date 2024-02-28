<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\{BelongsTo, BelongsToMany};

// ====================================

class Subject extends Model
{
    use HasFactory;

    protected $table = 'subjects';

    // ------------------------------
    // #Relationships
    // ------------------------------

    public function groups(): BelongsToMany
    {
        return $this->belongsToMany(Group::class);
    }

    public function teacher(): BelongsTo
    {
        return $this->belongsTo(Teacher::class);
    }
}
