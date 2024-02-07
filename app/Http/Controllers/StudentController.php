<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use Barryvdh\Debugbar\Facades\Debugbar;

class StudentController extends Controller
{
    //
    public function index()
    {
        // $students = Student::select('id')->get();
        $students = Student::with('user')->get();
        DebugBar::info($students);

        return inertia('Student/Index', compact('students'));
    }

    public function show(Student $student)
    {
        return inertia('Student/Show');
        //
    }

    //
    public function create()
    {
        return inertia('Student/Create');
    }

    //
    public function edit()
    {
        return inertia('Student/Edit');
    }

    //
    public function store()
    {
        //
    }

    //
    public function update()
    {
        //
    }

    //
    public function destroy()
    {
        //
    }
}
