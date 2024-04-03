<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\PersonRequest;
use App\Models\Teacher;
use App\Services\SearchServices;
use Illuminate\Http\Request;

// =============================================================================
class TeacherController extends Controller
{
    public function __construct(
        protected SearchServices $searchServices
    ) {
    }

    public function index(Request $request)
    {
        $searchTerm = $request->get('search', '');
        $columns = ['id', 'name', 'email'];

        $teachers = $this->searchServices
            ->searchPerson(new Teacher(), $searchTerm, $columns);

        return inertia('Admin/Teacher/Index', compact('teachers'));
    }

    public function create()
    {
        return inertia('Admin/Teacher/Create');
    }

    public function show(Teacher $teacher)
    {
        return inertia('Admin/Teacher/Show', compact('teacher'));
    }

    public function edit(Teacher $teacher)
    {
        return inertia('Admin/Teacher/Edit', compact('teacher'));
    }

    // ### Actions ###

    public function store(PersonRequest $request)
    {
        $validated = $request->validated();
        $teacher = Teacher::create($validated);

        return back()
            ->with('message', 'Cadastro do professor criado com sucesso!')
            ->with('id', $teacher->id);
    }

    public function update(PersonRequest $request, Teacher $teacher)
    {
        $validated = $request->validated();
        $teacher->update($validated);

        return back()->with('message', 'Professor atualizado com sucesso!');
    }
}
