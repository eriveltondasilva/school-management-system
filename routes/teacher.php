<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Teacher\DashboardController;

//# TEACHER ROUTES =============================================================
Route::middleware(['auth'])->prefix('professor')->name('teacher.')->group(function () {
    //* DASHBOARD ROUTES
    Route::get('painel', DashboardController::class)->name('dashboard');

    //* CALENDAR ROUTES
    Route::get('calendario', function () {
        return inertia('Calendar');
    })->name('calendar');
});