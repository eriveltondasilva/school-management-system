<?php

namespace App\Http\Controllers;

use App\Http\Requests\TeacherRequest;
use App\Models\Teacher;

// ========================================================================
class TeacherController extends Controller
{
    public function index()
    {
        $teachers = Teacher::all();

        return inertia('Teacher/Index', compact('teachers'));
    }

    public function show(Teacher $teacher)
    {
        return inertia('Teacher/Show', compact('teacher'));
    }

    public function create()
    {
        return inertia('Teacher/Create');
    }

    public function edit(Teacher $teacher)
    {
        return inertia('Teacher/Edit', compact('teacher'));
    }

    // ### API ###
    public function store(TeacherRequest $request)
    {
        $validated = $request->validated();
        $savedTeacher = Teacher::create($validated);

        return back()
            ->with('message', 'Cadastro do professor criado com sucesso!')
            ->with('id', $savedTeacher->id);
    }

    public function update(TeacherRequest $request, Teacher $teacher)
    {
        $validated = $request->validated();
        $teacher->update($validated);

        return to_route('teacher.show', $teacher->id);
    }

    public function destroy()
    {
        //
    }
}
