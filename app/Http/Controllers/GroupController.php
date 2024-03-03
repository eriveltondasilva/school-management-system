<?php

namespace App\Http\Controllers;

use App\Models\Group;

// ========================================================================
class GroupController extends Controller
{
    /** xxx */
    public function index()
    {
        $groups = Group::with('academicYear')->get();
        return inertia('Group/Index', compact('groups'));
    }

    /** xxx */
    public function show(Group $group)
    {
        return inertia('Group/Show', compact('group'));
    }

    /** xxx */
    public function create()
    {
        return inertia('Group/Create');
    }

    /** xxx */
    public function edit(Group $group)
    {
        return inertia('Group/Edit', compact('group'));
    }

    // ### Actions ###

    /** xxx */
    public function store()
    {
        return redirect()->route('groups.index');
    }

    /** xxx */
    public function update()
    {
        return redirect()->route('groups.index');
    }
}
