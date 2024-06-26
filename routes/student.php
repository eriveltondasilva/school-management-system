<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Student\DashboardController;

//# STUDENT ROUTES =============================================================
Route::middleware(['auth', 'role:student'])->prefix('aluno')->name('student.')->group(function () {
    //* DASHBOARD ROUTES
    Route::get('painel', DashboardController::class)->name('dashboard');

    //* CALENDAR ROUTES
    Route::get('calendario', function () {
        return inertia('Calendar');
    })->name('calendar');

});
