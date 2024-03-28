<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Subject;

// ========================================================================
class SubjectController extends Controller
{
    public function index()
    {
        $subjects = Subject::select('id', 'name', 'abbr')
            ->withCount('teachers')
            ->get();

        return inertia('Subject/Index', compact('subjects'));
    }
}
