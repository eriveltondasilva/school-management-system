<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;

//
Route::middleware('auth')
->controller(StudentController::class)
->prefix('/alunos')
->name('student.')
->group(function () {
    Route::get('/', 'index')->name('index');

    Route::get('/cadastrar', 'create')->name('create');

    Route::post('/', 'store')->name('store');

    Route::get('/{student}', 'show')->name('show');

    Route::get('/{student}/editar', 'edit')->name('edit');

    Route::put('/{student}', 'update')->name('update');
});