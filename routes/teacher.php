<?php

// use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TeacherController;

//# TEACHERS
Route::middleware('auth')
->controller(TeacherController::class)
->prefix('/professores')->name('teacher.')
->group(function () {
    Route::get('/', 'index')->name('index');
    Route::get('/cadastrar', 'create')->name('create');
    Route::post('/', 'store')->name('store');
    Route::get('/{teacher}', 'show')->name('show');
    Route::put('/{teacher}', 'update')->name('update');
    Route::get('/{teacher}/editar', 'edit')->name('edit');
});