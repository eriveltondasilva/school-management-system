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
});