<?php

use App\Http\Controllers\{
    DashboardController,
    ProfileController,
    SocialiteController,
    SubjectController
};
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
Route::middleware('auth')
->group(function () {
    // TODO: remover esta rota e configurar o HOME no arquivo auth.php
    Route::redirect('/dashboard', '/painel');

    // #DASHBOARD
    Route::get('/painel', DashboardController::class)->name('dashboard');

    // #SUBJECTS
    // Route::get('/disciplinas', [SubjectController::class, 'index'])->name('subject.index');
    // Route::get('/disciplinas/{id}', [SubjectController::class, 'show'])->name('subject.show');

    // #CALENDAR
    Route::get('/calendario', function () {
        return Inertia::render('Calendar');
    })->name('calendar');

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


// ##########################
Route::controller(SocialiteController::class)
->prefix('auth/{provider}')
->name('auth.')
->group(function () {
    Route::get('/redirect', 'redirect')->name('redirect');
    Route::get('/callback', 'callback')->name('callback');

    // http://127.0.0.1:8000/auth/google/redirect
    // http://127.0.0.1:8000/auth/google/callback
});


require __DIR__.'/auth.php';
require __DIR__.'/student.php';
require __DIR__.'/teacher.php';
