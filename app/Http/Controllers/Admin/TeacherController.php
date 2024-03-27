<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
//
use App\Http\Requests\PersonRequest;
use App\Models\Teacher;
use App\Services\SearchServices;
use Illuminate\Http\Request;

// ========================================================================
class TeacherController extends Controller
{
    public function __construct(
        protected SearchServices $searchServices
    ) {
    }

    /** xxx */
    public function index(Request $request)
    {
        $searchTerm = $request->get('search', '');
        $columns = ['id', 'name', 'email'];

        $teachers = $this->searchServices
            ->searchPerson(new Teacher(), $searchTerm, $columns);

        return inertia('Teacher/Index', compact('teachers'));
    }

    /** xxx */
    public function create()
    {
        return inertia('Teacher/Create');
    }

    /** xxx */
    public function show(Teacher $teacher)
    {
        return inertia('Teacher/Show', compact('teacher'));
    }

    /** xxx */
    public function edit(Teacher $teacher)
    {
        return inertia('Teacher/Edit', compact('teacher'));
    }

    // ### Actions ###

    /** xxx */
    public function store(PersonRequest $request)
    {
        $validated = $request->validated();
        $teacher = Teacher::create($validated);

        return back()
            ->with('message', 'Cadastro do professor criado com sucesso!')
            ->with('id', $teacher->id);
    }

    /** xxx */
    public function update(PersonRequest $request, Teacher $teacher)
    {
        $validated = $request->validated();
        $teacher->update($validated);

        return to_route('teacher.show', $teacher->id)
            ->with('message', 'Professor atualizado com sucesso!');
    }
    //
}
