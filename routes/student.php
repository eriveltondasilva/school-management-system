<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;

//
Route::middleware('auth')
->controller(StudentController::class)
->group(function () {
    Route::get('/alunos', 'index')->name('student.index');
    Route::get('/alunos/cadastrar', 'create')->name('student.create');
    Route::post('/alunos', 'store')->name('student.store');
    Route::get('/alunos/{student}', 'show')->name('student.show');
    Route::get('/alunos/{student}/editar', 'edit')->name('student.edit');
    Route::put('/alunos/{student}', 'update')->name('student.update');
});