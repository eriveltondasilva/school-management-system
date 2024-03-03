<?php

namespace App\Http\Controllers;

use App\Models\AcademicYear;
use App\Models\Student;

// ========================================================================
class DashboardController extends Controller
{
    /** xxx */
    public function __invoke()
    {
        return inertia('Dashboard');
    }
}
