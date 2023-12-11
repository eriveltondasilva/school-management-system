<?php

namespace App\Http\Controllers;

// use Illuminate\Http\Request;
use App\Models\AcademicYear;
use Inertia\Inertia;

class SubjectController extends Controller
{
    public function index()
    {
        // $user = auth()->user();
        // $year = AcademicYear::latest()->first();

        // $group = $user->profile->groups->firstWhere('academic_year_id', $year->id ?? now()->year);
        // $subjects = $group->subjects ?? collect();

        // ####
        return Inertia::render('Subject/Index', compact('subjects', 'year'));
    }

    public function show(int $id)
    {
        $user = auth()->user();
        // $year = AcademicYear::latest()->first();

        // $group = $user->profile->groups->firstWhere('academic_year_id', $year->id ?? now()->year);
        // $subjects = $group->subjects ?? collect();
        // $subject = $subjects->first(fn ($subject) => $subject->id === $id);

        // if (!$subject) {
        //     abort(404);
        // }

        // ####
        return Inertia::render('Subject/Show', compact('subject', 'year'));
    }
}
