<?php

namespace App\Http\Controllers;

use App\Models\Group;
// use Illuminate\Http\Request;

class GroupStudentController extends Controller
{
    public function index(Group $group)
    {
        $students = $group
            ->students()
            ->select('students.id', 'students.name')
            ->oldest('students.name')
            ->get();

        return inertia('GroupStudent/Index', compact('group', 'students'));
    }
}
