<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GroupStudentController;

// ===============================================
//# GROUP/STUDENT ROUTES
Route::middleware('auth')
->controller(GroupStudentController::class)
->prefix('turmas/{group}/alunos')->name('group-students.')
->group(function () {
    Route::get('/', 'index')->name('index');
    Route::get('/adicionar', 'addStudents')->name('add-students');
    // #####
    Route::post('/', 'store')->name('store');

    // TODO: implementar
    Route::get('/cadastrar', 'create')->name('create');
    Route::get('/{student}', 'edit')->name('edit');
    Route::put('/{student}', 'update')->name('update');
    Route::delete('/{student}', 'destroy')->name('destroy');
});
