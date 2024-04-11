<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use App\Models\AcademicYear;
use App\Models\Group;
use App\Models\Student;

class GroupStudentController extends Controller
{
    public function index(Group $group)
    {
        $students = $group
            ->students()
            ->select('students.id', 'students.name', 'students.gender')
            ->orderBy('students.name')
            ->get();

        return inertia('Admin/GroupStudent/Index', compact('group', 'students'));
    }

    public function create(Request $request, Group $group)
    {
        $searchTerm = $request->query('search');

        $activeYearId = AcademicYear::IsActive()->id;

        $studentsQuery = Student::select('id', 'name', 'gender')
            ->whereDoesntHave('groups', function (Builder $query) use ($activeYearId) {
                $query->where('academic_year_id', $activeYearId);
            })
            ->orderBy('name');

        if ($searchTerm) {
            $studentsQuery->where(function (Builder $query) use ($searchTerm) {
                $query->where('id', $searchTerm)
                    ->orWhere('name', 'like', "%{$searchTerm}%");
            });
        }

        $students = $studentsQuery->paginate(20);

        return inertia('Admin/GroupStudent/Create', compact('group', 'students'));
    }

    //# Actions

    public function store(Group $group, Student $student)
    {
        $group->students()->attach($student);

        $group->load('students');

        $message = sprintf(
            'Aluno(a) %s adicionado(a) à turma do %s.',
            $student->name,
            $group->name
        );

        return back()->with('message', $message);
    }

    public function destroy(Group $group, Student $student)
    {
        $group->students()->detach($student);

        $group->load('students');

        $message = sprintf(
            'Aluno(a) %s removido(a) da turma do %s.',
            $student->name,
            $group->name
        );

        return back()->with('message', $message);
    }
}
