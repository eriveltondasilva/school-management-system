<?php

namespace App\Http\Controllers\Teacher;

use App\Http\Controllers\Controller;
use App\Models\{AcademicYear, Group};
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class GroupController extends Controller
{
    public function index(Request $request)
    {
        $groupId = $request->query('search', '');
        $activeYear = AcademicYear::select('year')->isActive()->year;
        $currentTeacher = Auth::user()->profile;

        $teacherGroups = $currentTeacher
            ->groups()
            ->select('groups.id', 'groups.name')
            ->get();

        $selectedGroup = Group::With('students:id,name')
            ->whereHas('teachers', function (Builder $query) use ($currentTeacher) {
                $query->where('teachers.id', $currentTeacher->id);
            })
            ->find($groupId);

        $data = compact('teacherGroups', 'selectedGroup', 'activeYear');

        return inertia('Teacher/Group/Index', compact('data'));
    }
}
