<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::middleware('auth')
->group(function () {
    Route::get('/professores', function () {
        return Inertia::render('Teacher/Index');
    })->name('teacher.index');

    Route::get('/professores/cadastrar', function () {
        return Inertia::render('Teacher/Create');
    })->name('teacher.create');

    Route::post('/professores', function () {
    })->name('teacher.store');
});