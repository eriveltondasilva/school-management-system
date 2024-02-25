<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;

//# STUDENTS
Route::middleware('auth')
->controller(StudentController::class)
->name('student.')
->group(function () {
    Route::get('/alunos', 'index')->name('index');

    Route::get('/alunos/cadastrar', 'create')->name('create');

    Route::post('/alunos', 'store')->name('store');

    Route::get('/alunos/{student}', 'show')->name('show');

    Route::get('/alunos/{student}/editar', 'edit')->name('edit');

    Route::put('/alunos/{student}', 'update')->name('update');
});