<?php

namespace App\Http\Controllers\Teacher;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Models\{Group, AcademicYear};

// use Illuminate\Http\Request;

class GroupController extends Controller
{
    public function index()
    {
        $currentYear = AcademicYear::select('id', 'year')->isActive();

        $teacher = Auth::user()->profile;
        $groups = $teacher->groups()
            ->where('academic_year_id', $currentYear->id)
            ->get();


        return inertia('Teacher/Group/Index', compact('groups'));
    }
}
