<?php

// use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TeacherController;

//# TEACHERS
Route::middleware('auth')
->controller(TeacherController::class)
->name('teacher.')
->group(function () {
    //
    Route::get('/professores', 'index')->name('index');

    Route::get('/professores/cadastrar', 'create')->name('create');

    Route::post('/professores', 'store')->name('store');

    Route::get('/professores/{teacher}', 'show')->name('show');

    Route::get('/professores/{teacher}/editar', 'edit')->name('edit');

    Route::put('/professores/{teacher}', 'update')->name('update');
});