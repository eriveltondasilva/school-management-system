<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{GroupController, GroupStudentController};

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


Route::middleware('auth')
->controller(GroupStudentController::class)
->prefix('turmas/{group}/alunos')->name('group-students.')
->group(function () {
    Route::get('/', 'index')->name('index');
    Route::get('/cadastrar', 'create')->name('create');
    Route::post('/', 'store')->name('student-store');
    Route::get('/{student}', 'edit')->name('edit');
    Route::put('/{student}', 'update')->name('update');
    Route::delete('/{student}', 'destroy')->name('destroy');
});
