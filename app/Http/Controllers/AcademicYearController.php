<?php

namespace App\Http\Controllers;

use App\Models\AcademicYear;
use Illuminate\Http\Request;

// ========================================================================
class AcademicYearController extends Controller
{
    public function index()
    {
        $academicYears = AcademicYear::all();

        return inertia('AcademicYear', compact('academicYears'));
    }

    // ### API ###
    public function store(Request $request)
    {
        $validated = $request->validate([
            'year' => 'required|date|unique:academic_years,year',
        ]);

        AcademicYear::create($validated);
    }

    public function update(Request $request): void
    {
        $validated = $request->validate([
            'is_current' => 'required|boolean',
        ]);

        if ($validated['is_current']) {
            AcademicYear::where('is_current', true)->update(['is_current' => false]);
        }

        $academicYear = AcademicYear::find($request->id);
        $academicYear->update($validated);
    }
}
