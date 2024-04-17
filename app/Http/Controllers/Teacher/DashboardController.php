<?php

namespace App\Http\Controllers\Teacher;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Models\{AcademicYear};

// use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function __invoke()
    {
        $currentYear = AcademicYear::select('id', 'year')->isActive();

        $teacher = Auth::user()->profile;
        $groups = $teacher->groups()
            ->where('academic_year_id', $currentYear->id)
            ->withCount('students')
            ->get();

        $groupsCount = $groups->count();
        $studentsCount = $groups->sum('students_count');

        $data = compact(
            'currentYear',
            'groupsCount',
            'studentsCount',
        );

        $message = 'Bem-vindo(a)! Você está logado(a) como professor(a).';

        return inertia('Teacher/Dashboard', compact('data'))
            ->with('message', $message);
    }
}
