<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Student;
use App\Models\Teacher;
use App\Models\AcademicYear;

// use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function __invoke()
    {
        $currentYear = AcademicYear::IsActive();

        $counts = [
            'students' => Student::count(),
            'teachers' => Teacher::count(),
            'groups' => $groups = $currentYear->groups()->count(),
        ];

        return inertia('Admin/Dashboard', compact('counts', 'currentYear'));
    }
}
