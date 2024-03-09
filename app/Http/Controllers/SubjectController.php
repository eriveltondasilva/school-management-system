<?php

namespace App\Http\Controllers;

// ========================================================================
class SubjectController extends Controller
{
    public function index()
    {
        return inertia('Subject/Index');
    }

    public function show(int $id)
    {
        return inertia('Subject/Show');
    }
}
