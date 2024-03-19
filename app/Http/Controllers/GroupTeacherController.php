<?php

namespace App\Http\Controllers;

use App\Models\{AcademicYear, Group, Teacher};
use Illuminate\Http\Request;

class GroupTeacherController extends Controller
{
    public function index(Group $group)
    {
        $teachers = $group
            ->teachers()
            ->select('teachers.id', 'teachers.name', 'teachers.email')
            ->oldest('teachers.name')
            ->get();

        return inertia('GroupTeacher/Index', compact('group', 'teachers'));
    }

    public function create(Request $request, Group $group)
    {
        $validated = $request->validate([
            'search' => 'nullable|integer|min:1',
        ]);

        $searchId = $request->get('search', '');
        $teacher = null;

        if ($searchId) {
            $teacher = Teacher::select('id', 'name', 'cpf')
                ->whereDoesntHave('groups', function ($query) {
                    $query->where('academic_year_id', AcademicYear::isActive()->value('id'));
                })
                ->find($searchId);
        }

        return inertia('GroupTeacher/Create', compact('group', 'teacher'));
    }

    // ### Actions ###

    public function store(Request $request, Group $group)
    {
        $validated = $request->validate([
            'id' => 'required|exists:teachers,id',
        ]);

        $teacherId = $validated['id'];

        $group->teachers()->attach($teacherId);

        return back()
            ->with('message', "Professor com id {$teacherId} adicionado a turma do {$group->name} com sucesso.");
    }

    public function destroy(Group $group, Teacher $teacher)
    {
        $group->teachers()->detach($teacher);

        $group->refresh();

        return back()
            ->with('message', "O professor {$teacher->name}, com id {$teacher->id}, foi removido da turma com sucesso.");
    }
}
