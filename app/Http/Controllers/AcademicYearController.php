<?php

namespace App\Http\Controllers;

use App\Models\AcademicYear;
use Illuminate\Http\Request;

// ========================================================================
class AcademicYearController extends Controller
{
    public function __invoke()
    {
        $academicYears = AcademicYear::all();

        // ==>
        return inertia('AcademicYear', compact('academicYears'));
    }

    // #API
    public function store(Request $request)
    {
        // ==>
        return 'ok';
    }
}
