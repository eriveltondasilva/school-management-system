<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{GroupController, GroupStudentController, GroupTeacherController};

// ===============================================
//# GROUP ROUTES
Route::middleware('auth')
->controller(GroupController::class)
->prefix('turmas')->name('group.')
->group(function () {
    Route::get('/', 'index')->name('index');
    Route::get('/cadastrar', 'create')->name('create');
    Route::post('/', 'store')->name('store');
    // #####
    Route::get('/{group}/editar', 'edit')->name('edit');
    Route::put('/{group}', 'update')->name('update');
});


//# GROUP/STUDENTS ROUTES
Route::middleware('auth')
->controller(GroupStudentController::class)
->prefix('turmas/{group}/alunos')->name('group-students.')
->group(function () {
    Route::get('/', 'index')->name('index');
    Route::get('/cadastrar', 'create')->name('create');
    // #####
    Route::post('/', 'store')->name('store');
    Route::delete('/{student}', 'destroy')->name('destroy');
});


//# GROUP/TEACHERS ROUTES
Route::middleware('auth')
->controller(GroupTeacherController::class)
->prefix('turmas/{group}/professores')->name('group-teachers.')
->group(function () {
    Route::get('/', 'index')->name('index');
    Route::get('/cadastrar', 'create')->name('create');
    // #####
    Route::post('/', 'store')->name('store');
    Route::delete('/{teacher}', 'destroy')->name('destroy');

    // TODO: implementar
    // Route::get('/cadastrar', 'create')->name('create');
    // Route::get('/{student}', 'edit')->name('edit');
    // Route::put('/{student}', 'update')->name('update');
});
