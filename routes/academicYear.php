<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AcademicYearController;

// ===============================================
// #ACADEMIC YEAR ROUTES
Route::middleware('auth')->controller(AcademicYearController::class)
->prefix('ano-letivo')->name('academic-year.')->group(function () {
    Route::get('/', 'index')->name('index');
    Route::get('/cadastrar', 'create')->name('create');
    Route::post('/', 'store')->name('store');
    // #####
    Route::get('/{academicYear}/editar', 'edit')->name('edit');
    Route::put('/{academicYear}', 'update')->name('update');
    Route::put('/{academicYear}/atualizar-status', 'updateStatus')->name('update-status');
});
