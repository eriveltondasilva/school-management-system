<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{
    DashboardController,
    ProfileController,
    SocialiteController,
};

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

//# WELCOME
Route::get('/', function () {
    //* redireciona para a página painel caso usuário esteja logado
    if (auth()->user()) {
        return to_route('dashboard');
    }

    $canLogin = Route::has('login');
    $canRegister = Route::has('register');
    $laravelVersion = Application::VERSION;
    $phpVersion = PHP_VERSION;

    return inertia('Welcome', compact('canLogin', 'canRegister', 'laravelVersion', 'phpVersion'));
})->name('welcome');


//# AUTH
Route::middleware('auth')
->group(function () {
    // TODO: remover esta rota e configurar o HOME no arquivo auth.php
    Route::redirect('/dashboard', '/painel');

    // #DASHBOARD
    Route::get('/painel', [DashboardController::class, 'index'])->name('dashboard');

    // #CALENDAR
    Route::get('/calendario', function () {
        return inertia('Calendar');
    })->name('calendar');

    // #TEST
    Route::get('/teste', function () {
        return 'Hello, world!';
    })->name('test');
});


//# PROFILE
Route::middleware('auth')
->controller(ProfileController::class)
->prefix('perfil')->name('profile.')
->group(function () {
    Route::get('/', 'edit')->name('edit');
    Route::patch('/', 'update')->name('update');
    Route::delete('/', 'destroy')->name('destroy');
});


//# SOCIALITE
Route::controller(SocialiteController::class)
->prefix('auth/{provider}')->name('auth.')
->group(function () {
    Route::get('/redirect', 'redirect')->name('redirect');
    Route::get('/callback', 'callback')->name('callback');

    // http://127.0.0.1:8000/auth/google/redirect
    // http://127.0.0.1:8000/auth/google/callback
});


//# ROUTES
require __DIR__.'/auth.php';
require __DIR__.'/student.php';
require __DIR__.'/teacher.php';
require __DIR__.'/group.php';
require __DIR__.'/academicYear.php';
