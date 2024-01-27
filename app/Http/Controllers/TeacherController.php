<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Teacher;

//
class TeacherController extends Controller
{
    //
    public function index()
    {
        return inertia('Teacher/Index');
    }

    public function show(Teacher $teacher)
    {
        return inertia('Teacher/Show');
        //
    }

    //
    public function create()
    {
        return inertia('Teacher/Create');
    }

    //
    public function edit()
    {
        return inertia('Teacher/Edit');
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
