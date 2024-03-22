<?php

namespace App\Http\Controllers;

use App\Models\Subject;
use App\Models\Teacher;

// ========================================================================
class SubjectController extends Controller
{
    public function index()
    {
        // $teacher = Teacher::find(3);
        // $subject = Subject::all();
        // $subjects = $teacher->subjects()->attach($subject);

        $subjects = Subject::select('id', 'name')->with('teachers:id,name')->get();

        return inertia('Subject/Index', compact('subjects'));
    }

    public function show(int $id)
    {
        return inertia('Subject/Show');
    }
}
