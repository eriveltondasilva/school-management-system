<?php

namespace App\Http\Controllers;

use App\Models\Teacher;

// ========================================================================
class TeacherController extends Controller
{
    public function index()
    {
        $teachers = Teacher::with('user')->get();

        // ==>
        return inertia('Teacher/Index', compact('teachers'));
    }

    public function show(Teacher $teacher)
    {
        // ==>
        return inertia('Teacher/Show');
    }

    public function create()
    {
        // ==>
        return inertia('Teacher/Create');
    }

    public function edit()
    {
        // ==>
        return inertia('Teacher/Edit');
    }

    // #API
    public function store()
    {
        //
    }

    public function update()
    {
        //
    }

    public function destroy()
    {
        //
    }
}
