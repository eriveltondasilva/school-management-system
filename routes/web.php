<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{
    DashboardController,
    ProfileController,
    SocialiteController,
    GroupsController,
    AcademicYearController
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
    Route::get('/painel', DashboardController::class)->name('dashboard');

    // #CALENDAR
    Route::get('/calendario', function () {
        return inertia('Calendar');
    })->name('calendar');

    // #ACADEMIC_YEAR
    Route::get('/ano-letivo', [AcademicYearController::class, 'index'])->name('academicYear');

    // #GROUPS
    Route::get('/turmas', [GroupsController::class, 'index'])->name('groups');

    // #TEST
    Route::get('/teste', function () {
        return 'Hello, world!';
    })->name('test');


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

});


//# PROFILE
Route::middleware('auth')
->controller(ProfileController::class)->name('profile.')
->group(function () {
    Route::get('/perfil', 'edit')->name('edit');
    Route::patch('/perfil', 'update')->name('update');
    Route::delete('/perfil', 'destroy')->name('destroy');
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
