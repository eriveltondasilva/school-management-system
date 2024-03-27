<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
//
use App\Models\{AcademicYear, Group, Teacher};

class GroupTeacherController extends Controller
{
    public function listTeachers(Group $group)
    {
        $teachers = $group
            ->teachers()
            ->select('teachers.id', 'teachers.name', 'teachers.cpf')
            ->orderBy('teachers.name')
            ->get();

        return inertia('Group/ListTeachers', compact('group', 'teachers'));
    }

    public function addTeachers(Group $group)
    {
        $teachers = Teacher::select('id', 'name', 'cpf')
            ->whereDoesntHave('groups', function ($query) use ($group) {
                $query->where('groups.id', $group->id);
            })
            ->orderBy('teachers.name')
            ->get();

        return inertia('Group/AddTeacher', compact('group', 'teachers'));
    }

    // ### Actions ###

    public function storeTeacher(Group $group, Teacher $teacher)
    {
        $group->teachers()->attach($teacher);
        $group->load('teachers');
        $message = sprintf("Professor(a) %s, CPF %s, adicionado(a) à turma do %s.", $teacher->name, $teacher->cpf, $group->name);

        return back()->with('message', $message);
    }

    public function destroyTeacher(Group $group, Teacher $teacher)
    {
        $group->teachers()->detach($teacher);
        $group->load('teachers');
        $message = sprintf("Professor(a) %s, CPF %s, removido(a) da turma do %s.", $teacher->name, $teacher->cpf, $group->name);

        return back()->with('message', $message);
    }
}
