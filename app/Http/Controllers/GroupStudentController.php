<?php

namespace App\Http\Controllers;

use App\Models\{AcademicYear, Group, Student};
use Illuminate\Http\Request;
use Illuminate\Support\Str;

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

    public function add(Group $group)
    {
        return inertia('GroupStudent/Add', compact('group'));
    }

    // ### Actions ###

    public function getStudentById(Request $request, Group $group)
    {
        $validated = $request->validate([
            'search' => 'nullable|integer|min:1',
        ]);

        $searchId = $validated['search'] ?? null;
        $student = null;

        if ($searchId) {
            $student = Student::select('id', 'name', 'cpf')
                ->whereDoesntHave('groups', function ($query) {
                    $query->where('academic_year_id', AcademicYear::isActive()->value('id'));
                })
                ->find($searchId);
        }

        return back()->with('student', $student);
    }

    public function store(Request $request, Group $group)
    {
        $validated = $request->validate([
            'id' => 'required|exists:students,id',
        ]);

        $studentId = $validated['id'];

        $group->students()->attach($studentId);

        return back()
            ->with('message', "Aluno com matrícula {$studentId} adicionado com sucesso.")
            ->with('id', $studentId);
    }

    public function destroy(Group $group, Student $student)
    {
        $group->students()->detach($student);

        $group->refresh();

        $matriculation = $student->id;
        $studentName = $student->name;

        return back()
            ->with('message', "O estudante {$studentName}, com matrícula {$matriculation}, foi removido da turma.");
    }
}
