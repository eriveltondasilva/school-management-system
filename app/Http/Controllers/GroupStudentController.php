<?php

namespace App\Http\Controllers;

use App\Models\Group;
// use Illuminate\Http\Request;

class GroupStudentController extends Controller
{
    public function index(Group $group)
    {
        $students = $group->students()->get();

        return inertia('GroupStudent/Index', compact('group', 'students'));
    }
}
