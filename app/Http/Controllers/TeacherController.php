<?php

namespace App\Http\Controllers;

use App\Http\Requests\TeacherRequest;
use App\Models\Teacher;

// ========================================================================
class TeacherController extends Controller
{
    /** xxx */
    public function index()
    {
        $teachers = Teacher::all();

        return inertia('Teacher/Index', compact('teachers'));
    }

    /** xxx */
    public function show(Teacher $teacher)
    {
        return inertia('Teacher/Show', compact('teacher'));
    }

    /** xxx */
    public function create()
    {
        return inertia('Teacher/Create');
    }

    /** xxx */
    public function edit(Teacher $teacher)
    {
        return inertia('Teacher/Edit', compact('teacher'));
    }

    // ### Actions ###

    /** xxx */
    public function store(TeacherRequest $request)
    {
        $validated = $request->validated();
        $savedTeacher = Teacher::create($validated);

        return back()
            ->with('message', 'Cadastro do professor criado com sucesso!')
            ->with('id', $savedTeacher->id);
    }

    /** xxx */
    public function update(TeacherRequest $request, Teacher $teacher)
    {
        $validated = $request->validated();
        $teacher->update($validated);

        return to_route('teacher.show', $teacher->id)
            ->with('message', 'Professor atualizado com sucesso!');
    }

    /** xxx */
    public function destroy()
    {
        //
    }
}
