<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{
    DashboardController,
    ProfileController,
    SocialiteController,
    SubjectController
};

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/


//# WELCOME
Route::get('/', function () {
    //* redireciona para a página painel caso esteja logado
    if (auth()->user()) {
        return to_route('dashboard');
    }

    return inertia('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome');
// TODO: remover nome da rota


//# AUTH
Route::middleware('auth')
->group(function () {
    // TODO: remover esta rota e configurar o HOME no arquivo auth.php
    Route::redirect('/dashboard', '/painel');

    // #DASHBOARD
    Route::get('/painel', DashboardController::class)->name('dashboard');

    // #CLASSROOMS
    // Route::get('/turmas', function () {
    //     return Inertia::render('Classrooms');
    // })->name('classroom.index');

    // Route::get('/turmas', function () {
    //     return Inertia::render('Classrooms');
    // })->name('classroom.show');

    // #SUBJECTS
    // Route::get('/disciplinas', [SubjectController::class, 'index'])->name('subject.index');
    // Route::get('/disciplinas/{id}', [SubjectController::class, 'show'])->name('subject.show');

    // #CALENDAR
    Route::get('/calendario', function () {
        return inertia('Calendar');
    })->name('calendar');

    // #ACADEMIC_YEAR
    Route::get('/ano-letivo', function () {
        return inertia('AcademicYear');
    })->name('academicYear');

    // #GROUPS
    Route::get('/turmas', function () {
        return inertia('Groups');
    })->name('groups');

    // #TEST
    Route::get('/teste', function () {
        return 'Hello, world!';
    })->name('test');
});


//# PROFILE
Route::middleware('auth')
->controller(ProfileController::class)
->name('profile.')
->group(function () {
    Route::get('/perfil', 'edit')->name('edit');
    Route::patch('/perfil', 'update')->name('update');
    Route::delete('/perfil', 'destroy')->name('destroy');
});


//# SOCIALITE
Route::controller(SocialiteController::class)
->prefix('auth/{provider}')
->name('auth.')
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
