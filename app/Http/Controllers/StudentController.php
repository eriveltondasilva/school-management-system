<?php

namespace App\Http\Controllers;

use App\Models\Student;

// ========================================================================
class StudentController extends Controller
{
    public function index()
    {
        $students = Student::with('user')->get();

        // ==>
        return inertia('Student/Index', compact('students'));
    }

    public function show(Student $student)
    {
        // ==>
        return inertia('Student/Show');
    }

    public function create()
    {
        // ==>
        return inertia('Student/Create');
    }

    public function edit()
    {
        // ==>
        return inertia('Student/Edit');
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
