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

    protected $fillable = [
        'name',
        'abbr',
    ];

    // ------------------------------
    // ### Scopes ###
    // ------------------------------

    // ------------------------------
    // ### Relationships ###
    // ------------------------------

    public function grades(): BelongsToMany
    {
        return $this->belongsToMany(Grade::class);
    }

    public function teacher(): BelongsTo
    {
        return $this->belongsTo(Teacher::class);
    }


}
