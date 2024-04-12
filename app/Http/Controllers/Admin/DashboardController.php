<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\{AcademicYear, Student, Teacher};

class DashboardController extends Controller
{
    public function __invoke()
    {
        $currentYear = AcademicYear::select('id', 'year')->isActive();

        $groupsCount = $currentYear ? $currentYear->groups()->count() : 0;
        $studentsCount = Student::count();
        $teachersCount = Teacher::count();

        $data = compact(
            'currentYear',
            'groupsCount',
            'studentsCount',
            'teachersCount'
        );

        return inertia('Admin/Dashboard', compact('data'));
    }
}
