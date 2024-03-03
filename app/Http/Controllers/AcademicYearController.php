<?php

namespace App\Http\Controllers;

use App\Models\AcademicYear;
use Illuminate\Http\Request;

// ========================================================================
class AcademicYearController extends Controller
{
    /** xxx */
    public function index()
    {
        $academicYears = AcademicYear::latest('year')->take(8)->withCount('groups')->get();

        return inertia('AcademicYear/Index', compact('academicYears'));
    }

    /** xxx */
    public function create()
    {
        return inertia('AcademicYear/Create');
    }

    /** xxx */
    public function edit(AcademicYear $academicYear)
    {
        return inertia('AcademicYear/Edit', compact('academicYear'));
    }

    /** xxx */
    public function show(AcademicYear $academicYear)
    {
        //
    }

    // ### Actions ###

    /** xxx */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'year' => 'required|integer|between:2000,2100|unique:academic_years,year',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date|after:start_date',
        ]);

        $currentAcademicYear = AcademicYear::create($validated);

        return to_route('academic-year.edit', $currentAcademicYear->id)
            ->with('message', 'Ano letivo criado com sucesso.');
    }

    /** xxx */
    public function update(Request $request, AcademicYear $academicYear)
    {
        $validated = $request->validate([
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date|after:start_date',
        ]);

        $academicYear->update($validated);

        return back()
            ->with('message', "Ano letivo {$academicYear->year} atualizado com sucesso.");
    }

    /** xxx */
    public function updateIsCurrent(AcademicYear $academicYear)
    {
        if ($academicYear->is_current) {
            return back();
        }

        AcademicYear::where('is_current', true)->update(['is_current' => false]);

        $academicYear->update(['is_current' => true]);

        return back();
    }
    //
}
