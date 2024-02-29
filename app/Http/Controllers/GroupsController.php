<?php

namespace App\Http\Controllers;

use App\Models\Group;

// ========================================================================
class GroupsController extends Controller
{
    public function index()
    {
        $groups = Group::with('academicYear')->get();

        return inertia('Groups', compact('groups'));
    }
}
