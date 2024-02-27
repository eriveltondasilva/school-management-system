<?php

namespace App\Http\Controllers;

use App\Models\Group;

// ========================================================================
class GroupsController extends Controller
{
    public function __invoke()
    {
        $groups = Group::all();

        // ==>
        return inertia('Groups', compact('groups'));
    }
}
