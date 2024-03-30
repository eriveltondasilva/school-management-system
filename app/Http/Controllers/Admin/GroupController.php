<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
//
use App\Http\Requests\GroupRequest;
use App\Models\AcademicYear;
use App\Models\Group;

// use Illuminate\Http\Request;

// ========================================================================
class GroupController extends Controller
{
    public function index()
    {
        $groups = Group::activeAcademicYear()
            ->withCount('students', 'teachers')
            ->get();

        return inertia('Admin/Group/Index', compact('groups'));
    }

    public function create()
    {
        return inertia('Admin/Group/Create');
    }

    public function edit(Group $group)
    {
        return inertia('Admin/Group/Edit', compact('group'));
    }

    // ### Actions ###

    public function store(GroupRequest $request)
    {
        $activeYearId = AcademicYear::IsActive()->id;

        if (!$activeYearId) {
            return back()->with('message', 'Ano letivo atual não existe!');
        }

        $validated = $request->validated();

        $group = Group::create($validated);
        $group->academic_year_id = $activeYearId;
        $group->save();

        return back()
            ->with('message', 'Turma criada com sucesso!')
            ->with('id', $group->id);
    }

    public function update(GroupRequest $request, Group $group)
    {
        $validated = $request->validated();

        $group->update($validated);

        return back()->with('message', 'Turma atualizada com sucesso!');
    }
}
