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
    // TODO: implementar
    Route::get('/cadastrar', 'create')->name('create');
    Route::post('/', 'store')->name('student-store');
    // #####
    Route::get('/{student}', 'edit')->name('edit');
    Route::put('/{student}', 'update')->name('update');
    Route::delete('/{student}', 'destroy')->name('destroy');
});
