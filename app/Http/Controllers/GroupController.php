<?php

namespace App\Http\Controllers;

use App\Models\AcademicYear;
use App\Models\Group;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

// ========================================================================
class GroupController extends Controller
{
    /** xxx */
    public function index()
    {
        $groups = Group::currentAcademicYear()->with('academicYear:id,year')->get();

        return inertia('Group/Index', compact('groups'));
    }

    /** xxx */
    public function create()
    {
        return inertia('Group/Create');
    }

    /** xxx */
    public function show(Group $group)
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
    public function store(Request $request)
    {
        $currentAcademicYear = AcademicYear::current()->first();

        $validated = $request->validate([
            'name' => [
                'required',
                'string',
                'max:255',
                Rule::unique('groups')->where(function ($query) use ($currentAcademicYear) {
                    return $query->where('academic_year_id', $currentAcademicYear->id);
                }),
            ],
            'classroom' => 'nullable|string|max:255',
            'shift' => 'nullable|string|max:255',
        ]);

        $group = Group::create($validated);
        $group->academic_year_id = $currentAcademicYear->id;
        $group->save();

        return back()
            ->with('message', 'Turma criada com sucesso!')
            ->with('id', $group->id);
    }

    /** xxx */
    public function update(Request $request, Group $group)
    {
        $validated = $request->validate([
            'classroom' => 'nullable|string|max:255',
            'shift' => 'nullable|string|max:255',
        ]);

        $group->update($validated);

        return back()
            ->with('message', 'Turma atualizada com sucesso!');
    }
}
