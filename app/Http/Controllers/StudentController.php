<?php

namespace App\Http\Controllers;

use App\Models\Student;
use App\Http\Requests\StudentRequest;

// ============================================================================
class StudentController extends Controller
{
    public function index()
    {
        $students = Student::all();
        return inertia('Student/Index', compact('students'));
    }

    public function show(Student $student)
    {
        return inertia('Student/Show', compact('student'));
    }

    public function create()
    {
        return inertia('Student/Create');
    }

    public function edit(Student $student)
    {
        return inertia('Student/Edit', compact('student'));
    }

    // #API
    public function store(StudentRequest $request)
    {
        $validated = $request->validated();
        Student::create($validated);
        return to_route('student.create');
    }

    public function update(StudentRequest $request, Student $student)
    {
        $validated = $request->validated();
        $student->update($validated);
        return to_route('student.show', $student->id);
    }

    public function destroy()
    {
        //
    }
}
