<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::middleware('auth')
->group(function () {
    Route::get('/alunos', function () {
        return Inertia::render('Student/Index');
    })->name('student.index');

    Route::get('/alunos/cadastrar', function () {
        return Inertia::render('Student/Create');
    })->name('student.create');

    Route::post('/alunos', function () {
    })->name('student.store');
});