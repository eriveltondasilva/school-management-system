<?php

namespace App\Http\Controllers;

use App\Models\Group;
use App\Models\Student;
use Illuminate\Http\Request;

class GroupStudentController extends Controller
{
    public function index(Group $group)
    {
        $students = $group
            ->students()
            ->select('students.id', 'students.name')
            ->oldest('students.name')
            ->get();

        return inertia('GroupStudent/Index', compact('group', 'students'));
    }

    public function addStudents(Request $request, Group $group)
    {
        $request->validate([
            'search' => 'nullable|numeric|min:1',
        ]);

        $id = $request->search;

        $student = Student::select('id', 'name', 'cpf')->find($id);

        return inertia('GroupStudent/Add', compact('group', 'student'));
    }

    // ### Actions ###

    public function store(Request $request, Group $group): void
    {
        $validated = $request->validate([
            'id' => 'required|exists:students,id',
        ]);

        $group->students()->attach($validated);
    }
}
