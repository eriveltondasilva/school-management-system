<?php

namespace App\Http\Controllers;

use App\Models\AcademicYear;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

// ========================================================================
class AcademicYearController extends Controller
{
    /** xxx */
    public function index()
    {
        $academicYears = AcademicYear::latest('year')
            ->take(8)
            ->withCount('groups')
            ->get();

        return inertia('AcademicYear/Index', compact('academicYears'));
    }

    /** xxx */
    public function create()
    {
        return inertia('AcademicYear/Create');
    }

    /** xxx */
    public function show()
    {
        //
    }

    /** xxx */
    public function edit(AcademicYear $academicYear)
    {
        return inertia('AcademicYear/Edit', compact('academicYear'));
    }

    // ### Actions ###

    /** xxx */
    public function store(Request $request)
    {
        $currentYear = date('Y');
        $nextYear = $currentYear + 1;

        $validated = $request->validate([
            'year' => [
            'required',
            'integer',
            'between:' . $currentYear . ',' . $nextYear,
            Rule::unique('academic_years', 'year'),
        ],
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date|after:start_date',
        ], [
            'year.required' => 'O ano letivo é obrigatório.',
            'year.integer' => 'O ano letivo deve ser um número.',
            'year.between' => 'O ano letivo deve ser o próximo ano.',
            'year.unique' => 'O ano letivo já existe.',
            'start_date.date' => 'A data de início deve ser uma data válida.',
            'end_date.date' => 'A data de término deve ser uma data válida.',
            'end_date.after' => 'A data de término deve ser posterior à data de início.'
        ]);

        $academicYear = AcademicYear::create($validated);

        return back()
            ->with('message', 'Ano letivo criado com sucesso!')
            ->with('id', $academicYear->id);
    }

    /** xxx */
    public function update(Request $request, AcademicYear $academicYear)
    {
        $validated = $request->validate([
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date|after:start_date',
        ], [
            'start_date.date' => 'A data de início deve ser uma data válida.',
            'end_date.date' => 'A data de fim deve ser uma data válida.',
            'end_date.after' => 'A data de término deve ser posterior à data de início.'
        ]);

        $academicYear->update($validated);

        return back()
            ->with('message', 'Ano letivo atualizado com sucesso!');
    }

    /** xxx */
    public function updateStatus(AcademicYear $academicYear)
    {
        if ($academicYear->is_active) {
            return back();
        }

        AcademicYear::where('is_active', true)
            ->update(['is_active' => false]);

        $academicYear->update(['is_active' => true]);

        return back()
            ->with('message', 'Ano letivo ativo!');
    }
    //
}
