<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

// ====================================

class Quarter extends Model
{
    use HasFactory;

    protected $table = 'quarters';

    // ------------------------------
    // #Relationships
    // ------------------------------

    public function academic_year(): BelongsTo
    {
        return $this->belongsTo(AcademicYear::class);
    }

}