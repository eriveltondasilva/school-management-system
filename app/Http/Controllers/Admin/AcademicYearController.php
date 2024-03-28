<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
//
use App\Http\Requests\AcademicYearRequest;
use App\Models\AcademicYear;

// use Illuminate\Http\Request;

// ========================================================================
class AcademicYearController extends Controller
{
    public function index()
    {
        $academicYears = AcademicYear::latest('year')
            ->take(8)
            ->withCount('groups')
            ->get();

        return inertia('AcademicYear/Index', compact('academicYears'));
    }

    public function create()
    {
        return inertia('AcademicYear/Create');
    }

    public function show()
    {
        //
    }

    public function edit(AcademicYear $academicYear)
    {
        $academicYear->load('quarters');

        return inertia('AcademicYear/Edit', compact('academicYear'));
    }

    // ### Actions ###

    public function store(AcademicYearRequest $request)
    {
        $quarters = [
            ['name' => '1° Bimestre'],
            ['name' => '2° Bimestre'],
            ['name' => '3° Bimestre'],
            ['name' => '4° Bimestre'],
        ];

        $validated = $request->validated();

        $academicYear = AcademicYear::create($validated);

        $academicYear->groups()->createMany($quarters);

        return back()
            ->with('message', 'Ano letivo criado com sucesso!')
            ->with('id', $academicYear->id);
    }

    public function update(AcademicYearRequest $request, AcademicYear $academicYear)
    {
        $validated = $request->validated();

        $academicYear->update($validated);

        return back()->with('message', 'Ano letivo atualizado com sucesso!');
    }

    public function updateStatus(AcademicYear $academicYear)
    {
        if ($academicYear->is_active) {
            return back();
        }

        AcademicYear::where('is_active', true)->update(['is_active' => false]);

        $academicYear->update(['is_active' => true]);

        return back()->with('message', 'Ano letivo ativo!');
    }
}
