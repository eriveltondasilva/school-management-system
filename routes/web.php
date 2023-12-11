<?php

use App\Http\Controllers\{DashboardController, ProfileController, SubjectController};
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

// ##########################
Route::get('/', function () {
    // redireciona para a página painel caso esteja logado
    if (auth()->user()) {
        return to_route('dashboard');
    }

    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


// ##########################
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// ##########################
Route::middleware('auth')
->group(function () {
    // TODO: remover esta rota e configurar o HOME no arquivo auth.php
    Route::redirect('/dashboard', '/painel');

    // #DASHBOARD
    Route::get('/painel', DashboardController::class)->name('dashboard');

    // #SUBJECTS
    Route::get('/disciplinas', [SubjectController::class, 'index'])->name('subject.index');
    Route::get('/disciplinas/{id}', [SubjectController::class, 'show'])->name('subject.show');

    // #BIMESTRES
    // Route::get('/bimestres')->name('subjects');

    // #CALENDAR
    Route::get('/calendario', function () {
        return Inertia::render('Calender');
    })->name('calendar');

    // #CALCULATOR
    Route::get('/calculadora', function () {
        return Inertia::render('Calculator');
    })->name('calculator');
});

// ##########################
Route::middleware('auth')
->controller(ProfileController::class)
->name('profile.')
->group(function () {
    Route::get('/profile', 'edit')->name('edit');
    Route::patch('/profile', 'update')->name('update');
    Route::delete('/profile', 'destroy')->name('destroy');
});


require __DIR__.'/auth.php';
