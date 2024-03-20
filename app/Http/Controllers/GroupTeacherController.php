<?php

namespace App\Http\Controllers;

use App\Models\{AcademicYear, Group, Teacher};
// use Illuminate\Http\Request;

class GroupTeacherController extends Controller
{
    public function index(Group $group)
    {
        $teachers = $group
            ->teachers()
            ->select('teachers.id', 'teachers.name', 'teachers.cpf')
            ->orderBy('teachers.name')
            ->get();

        return inertia('GroupTeacher/Index', compact('group', 'teachers'));
    }

    public function create(Group $group)
    {
        $activeYearId = AcademicYear::isActive()->value('id');

        $teachers = Teacher::select('id', 'name', 'cpf')
            ->whereDoesntHave('groups', function ($query) use ($group) {
                $query->where('groups.id', $group->id);
            })
            ->orderBy('teachers.name')
            ->get();

        return inertia('GroupTeacher/Create', compact('group', 'teachers'));
    }

    // ### Actions ###

    public function addTeacher(Group $group, Teacher $teacher)
    {
        $group->teachers()->attach($teacher);

        $group->load('teachers');

        $message = sprintf("Professor(a) %s, CPF %s, adicionado(a) à turma do %s.", $teacher->name, $teacher->cpf, $group->name);

        return back()->with('message', $message);
    }

    public function deleteTeacher(Group $group, Teacher $teacher)
    {
        $group->teachers()->detach($teacher);

        $group->load('teachers');

        $message = sprintf("Professor(a) %s, CPF %s, removido(a) da turma do %s.", $teacher->name, $teacher->cpf, $group->name);

        return back()->with('message', $message);
    }
}
