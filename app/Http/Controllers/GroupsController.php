<?php

namespace App\Http\Controllers;

use App\Models\Group;

// ========================================================================
class GroupsController extends Controller
{
    public function __invoke()
    {
        $groups = Group::where('academic_year_id', 2024)->get();

        // ==>
        return inertia('Groups', compact('groups'));
    }
}
