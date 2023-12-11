<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

// ------------------------------

class AcademicYear extends Model
{
    use HasFactory;

    protected $table = 'academic_years';

    // ------------------------------
    // #Relationships
    // ------------------------------

    public function quarters(): HasMany
    {
        return $this->hasMany(Quarter::class);
    }

    // ####
    public function subjects(): HasMany
    {
        return $this->hasMany(Subject::class);
    }

}