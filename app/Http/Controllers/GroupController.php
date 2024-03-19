<?php

namespace App\Http\Controllers;

use App\Http\Requests\GroupRequest;
use App\Models\AcademicYear;
use App\Models\Group;

// use Illuminate\Http\Request;

// ========================================================================
class GroupController extends Controller
{
    /** xxx */
    public function index()
    {
        $groups = Group::activeAcademicYear()
            ->withCount('students', 'teachers')
            ->get();

        return inertia('Group/Index', compact('groups'));
    }

    /** xxx */
    public function create()
    {
        return inertia('Group/Create');
    }

    /** xxx */
    public function show()
    {
        //
    }

    /** xxx */
    public function edit(Group $group)
    {
        return inertia('Group/Edit', compact('group'));
    }

    // ### Actions ###

    /** xxx */
    public function store(GroupRequest $request)
    {
        $activeAcademicYearId = AcademicYear::isActive()->value('id');

        if (!$activeAcademicYearId) {
            return back()->with('message', 'Ano letivo atual não existe!');
        }

        $validated = $request->validated();

        $group = Group::create($validated);
        $group->academic_year_id = $activeAcademicYearId;
        $group->save();

        return back()
            ->with('message', 'Turma criada com sucesso!')
            ->with('id', $group->id);
    }

    /** xxx */
    public function update(GroupRequest $request, Group $group)
    {
        $validated = $request->validated();

        $group->update($validated);

        return back()->with('message', 'Turma atualizada com sucesso!');
    }
}
