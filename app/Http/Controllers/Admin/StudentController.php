<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
//
use App\Models\Student;
use App\Http\Requests\PersonRequest;
use App\Services\SearchServices;
use Illuminate\Http\Request;

// ============================================================================
class StudentController extends Controller
{
    public function __construct(
        protected SearchServices $searchServices
    ) {
    }

    public function index(Request $request)
    {
        $searchTerm = $request->get('search', '');
        $columns = ['id', 'name', 'gender'];

        $students = $this->searchServices
            ->searchPerson(new Student(), $searchTerm, $columns);

        return inertia('Student/Index', compact('students'));
    }

    public function create()
    {
        return inertia('Student/Create');
    }

    public function show(Student $student)
    {
        return inertia('Student/Show', compact('student'));
    }

    public function edit(Student $student)
    {
        return inertia('Student/Edit', compact('student'));
    }

    // ### Actions ###

    public function store(PersonRequest $request)
    {
        $validated = $request->validated();
        $student = Student::create($validated);

        return back()
            ->with('message', 'Cadastro do aluno criado com sucesso!')
            ->with('id', $student->id);
    }

    public function update(PersonRequest $request, Student $student)
    {
        $validated = $request->validated();
        $student->update($validated);

        return to_route('student.show', $student->id)
            ->with('message', 'Aluno atualizado com sucesso!');
    }
}
