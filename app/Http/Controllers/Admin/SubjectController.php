<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
//
use App\Models\AcademicYear;
use App\Models\Subject;
use App\Models\Teacher;

// ========================================================================
class SubjectController extends Controller
{
    public function index()
    {
        $activeYearId = AcademicYear::IsActive();
        // dd($activeYearId);

        $subjects = Subject::select('id', 'name', 'abbr')
            ->withCount('teachers')
            ->get();

        return inertia('Subject/Index', compact('subjects'));
    }

    public function listTeachers(Subject $subject)
    {
        $teachers = $subject
            ->teachers()
            ->select('teachers.id', 'teachers.name', 'teachers.cpf')
            ->orderBy('teachers.name')
            ->get();

        return inertia('Subject/ListTeachers', compact('subject', 'teachers'));
    }

    public function addTeachers(Subject $subject)
    {
        $teachers = Teacher::select('id', 'name', 'cpf')
            ->whereDoesntHave('subjects', function ($query) use ($subject) {
                $query->where('subject_id', $subject->id);
            })
            ->orderBy('teachers.name')
            ->get();

        return inertia('Subject/AddTeacher', compact('subject', 'teachers'));
    }

    // ### ACTION ###

    public function storeTeacher(Subject $subject, Teacher $teacher)
    {
        $subject->teachers()->attach($teacher, ['academic_year_id' => AcademicYear::IsActive()->id]);
        $subject->load('teachers');
        $message = sprintf("Professor(a) %s, CPF %s, adicionado(a) à disciplina de %s.", $teacher->name, $teacher->cpf, $subject->name);

        return back()->with('message', $message);
    }

    public function destroyTeacher(Subject $subject, Teacher $teacher)
    {

        $subject->teachers()->detach($teacher);
        $subject->load('teachers');
        $message = sprintf("Professor(a) %s, CPF %s, removide(a) da disciplina de %s.", $teacher->name, $teacher->cpf, $subject->name);

        return back()->with('message', $message);
    }
}
