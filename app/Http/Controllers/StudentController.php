<?php

namespace App\Http\Controllers;

// use Illuminate\Http\Request;
use App\Models\Student;
use Barryvdh\Debugbar\Facades\Debugbar;


class StudentController extends Controller
{
    //
    public function index()
    {
        // $students = Student::select('id')->get();
        $students = Student::without('user')->get();
        DebugBar::addMessage('Another message', 'mylabel lorem');
        return inertia('Student/Index', compact('students'));
    }

    //
    public function create()
    {
        return inertia('Student/Create');
    }

    //
    public function store()
    {
        //
    }

    //
    public function edit()
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
