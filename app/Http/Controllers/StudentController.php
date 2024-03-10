<?php

namespace App\Http\Controllers;

use App\Models\Student;
use App\Http\Requests\PersonRequest;
use App\Services\SearchServices;
use Illuminate\Http\Request;

// ============================================================================
class StudentController extends Controller
{
    public function __construct(
        protected SearchServices $searchServices
    ) { }

    /** xxx */
    public function index(Request $request)
    {
        $search = $request->get('search', '');

        $students = $this
            ->searchServices
            ->searchPerson(new Student(), $search);

        return inertia('Student/Index', compact('students'));
    }

    /** xxx */
    public function create()
    {
        return inertia('Student/Create');
    }

    /** xxx */
    public function show(Student $student)
    {
        return inertia('Student/Show', compact('student'));
    }

    /** xxx */
    public function edit(Student $student)
    {
        return inertia('Student/Edit', compact('student'));
    }

    // ### Actions ###

    /** xxx */
    public function store(PersonRequest $request)
    {
        $validated = $request->validated();
        $student = Student::create($validated);

        return back()
            ->with('message', 'Cadastro do aluno criado com sucesso!')
            ->with('id', $student->id);
    }

    /** xxx */
    public function update(PersonRequest $request, Student $student)
    {
        $validated = $request->validated();
        $student->update($validated);

        return to_route('student.show', $student->id)
            ->with('message', 'Aluno atualizado com sucesso!');
    }
    //
}
