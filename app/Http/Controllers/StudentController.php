<?php

namespace App\Http\Controllers;

use App\Models\Student;
use App\Http\Requests\StudentRequest;

// ============================================================================
class StudentController extends Controller
{
    /** xxx */
    public function index()
    {
        $students = Student::all();

        return inertia('Student/Index', compact('students'));
    }

    /** xxx */
    public function show(Student $student)
    {
        return inertia('Student/Show', compact('student'));
    }

    /** xxx */
    public function create()
    {
        return inertia('Student/Create');
    }

    /** xxx */
    public function edit(Student $student)
    {
        return inertia('Student/Edit', compact('student'));
    }

    // ### Actions ###

    /** xxx */
    public function store(StudentRequest $request)
    {
        $validated = $request->validated();
        $savedStudent = Student::create($validated);

        return back()
            ->with('message', 'Cadastro do aluno criado com sucesso!')
            ->with('id', $savedStudent->id);
    }

    /** xxx */
    public function update(StudentRequest $request, Student $student)
    {
        $validated = $request->validated();
        $student->update($validated);

        return to_route('student.show', $student->id)
            ->with('message', 'Aluno atualizado com sucesso!');
    }

    /** xxx */
    public function destroy()
    {
        //
    }
}
