<?php

namespace App\Http\Controllers;

// use App\Models\AcademicYear;
// use App\Models\Student;

// ========================================================================
class DashboardController extends Controller
{
    /** xxx */
    public function index()
    {
        return inertia('Dashboard');
    }
}
