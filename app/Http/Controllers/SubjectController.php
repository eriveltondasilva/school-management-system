<?php

namespace App\Http\Controllers;

use App\Models\Subject;
use App\Models\Teacher;

// ========================================================================
class SubjectController extends Controller
{
    public function index()
    {
        $subjects = Subject::all();
        return inertia('Subject/Index', compact('subjects'));
    }

    public function show(int $id)
    {
        return inertia('Subject/Show');
    }
}
