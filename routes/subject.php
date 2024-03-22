<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{
    SubjectController,
};

// ===============================================
Route::middleware('auth')
->prefix('dsici')->name('group.')->group(function () {
    //# GROUP ROUTES
    Route::controller(SubjectController::class)->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/cadastrar', 'create')->name('create');
        Route::get('/{group}/editar', 'edit')->name('edit');
        // Route::get('/{group}', 'show')->name('show');
        // ### ACTIONS ###
        Route::post('/', 'store')->name('store');
        Route::put('/{group}', 'update')->name('update');
    });

    //# GROUP/TEACHERS ROUTES
    Route::controller(SubjectController::class)
    ->prefix('{group}/professores')->group(function () {
        Route::get('/', 'listTeachers')->name('list-teachers');
        Route::get('/adicionar', 'addTeacher')->name('add-teacher');
        // ### ACTIONS ###
        Route::post('/{teacher}', 'storeTeacher')->name('store-teacher');
        Route::delete('/{teacher}', 'destroyTeacher')->name('destroy-teacher');
    });
});
