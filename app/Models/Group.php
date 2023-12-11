<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

// ------------------------------

class Group extends Model
{
    use HasFactory;

    protected $table = 'groups';

    // ------------------------------
    // #Relationships
    // ------------------------------

    public function students(): BelongsToMany
    {
        return $this->belongsToMany(Student::class);
    }

    // ####
    public function subjects(): BelongsToMany
    {
        return $this->belongsToMany(Subject::class);
    }

    // ####
    public function teachers(): BelongsToMany
    {
        return $this->belongsToMany(Teacher::class);
    }

}