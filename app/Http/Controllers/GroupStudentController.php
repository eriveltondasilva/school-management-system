<?php

namespace App\Http\Controllers;

use App\Models\{AcademicYear, Group, Student};
use Illuminate\Http\Request;

class GroupStudentController extends Controller
{
    public function listStudents(Group $group)
    {
        $students = $group
            ->students()
            ->select('students.id', 'students.name', 'students.gender')
            ->orderBy('students.name')
            ->get();

        return inertia('Group/ListStudents', compact('group', 'students'));
    }

    public function addStudents(Request $request, Group $group)
    {

        $request->validate(['search' => 'nullable|string']);

        $searchTerm = $request->get('search', '');

        $activeYearId = AcademicYear::IsActive()->id;

        $studentsQuery = Student::select('id', 'name', 'gender')
            ->whereDoesntHave('groups', function ($query) use ($activeYearId) {
                $query->where('academic_year_id', $activeYearId);
            })
            ->orderBy('name');

        if ($searchTerm) {
            $studentsQuery->where(function ($query) use ($searchTerm) {
                $query->where('id', $searchTerm)
                    ->orWhere('name', 'like', "{$searchTerm}%");
            });
        }

        $students = $studentsQuery->paginate(20);

        return inertia('Group/AddStudent', compact('group', 'students'));
    }

    // ### Actions ###

    public function storeStudent(Group $group, Student $student)
    {
        $group->students()->attach($student);

        $group->load('students');

        $message = sprintf("Aluno(a) %s adicionado(a) à turma do %s.", $student->name, $group->name);

        return back()->with('message', $message);
    }

    public function destroyStudent(Group $group, Student $student)
    {
        $group->students()->detach($student);

        $group->load('students');

        $message = sprintf("Aluno(a) %s removido(a) da turma do %s.", $student->name, $group->name);

        return back()->with('message', $message);
    }
}
