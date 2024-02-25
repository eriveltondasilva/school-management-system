<?php

namespace App\Http\Controllers;

use App\Models\AcademicYear;
use Illuminate\Http\Request;

// ========================================================================
class AcademicYearController extends Controller
{
    public function __invoke()
    {
        $academicYear = AcademicYear::get();

        // ==>
        return inertia('Groups', compact('academicYear'));
    }

    // #API
    public function store(Request $request)
    {
        // ==>
        return 'ok';
    }
}
