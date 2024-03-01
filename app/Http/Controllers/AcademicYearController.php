<?php

namespace App\Http\Controllers;

use App\Models\AcademicYear;
use Illuminate\Http\Request;

// ========================================================================
class AcademicYearController extends Controller
{
    public function index()
    {
        $academicYears = AcademicYear::orderBy('year', 'desc')->take(8)->get();

        return inertia('AcademicYear/Index', compact('academicYears'));
    }

    public function create()
    {
        return inertia('AcademicYear/Create');
    }

    public function edit(AcademicYear $academicYear)
    {
        return inertia('AcademicYear/Edit', compact('academicYear'));
    }

    public function show(AcademicYear $academicYear)
    {
        // return inertia('AcademicYear/Show', compact('academicYear'));
    }

    // ### API ###
    public function store(Request $request)
    {
        $validated = $request->validate([
            'year' => 'required|integer|min:1900|max:2999|unique:academic_years,year',
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
