<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{
    DashboardController,
    ProfileController,
    SocialiteController,
    GroupController,
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
    Route::controller(AcademicYearController::class)
    ->prefix('/ano-letivo')->name('academic-year.')
    ->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/cadastrar', 'create')->name('create');
        Route::post('/', 'store')->name('store');
        //
        Route::get('/{academicYear}/editar', 'edit')->name('edit');
        Route::put('/{academicYear}', 'update')->name('update');
        Route::put('/{academicYear}/atualizar-status', 'updateIsCurrent')->name('update-is-current');
    });

    // #GROUPS
    Route::controller(GroupController::class)
    ->prefix('/turmas')->name('group.')
    ->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/cadastrar', 'create')->name('create');
        Route::post('/', 'store')->name('store');
        //
        Route::get('/{group}/editar', 'edit')->name('edit');
        Route::put('/{group}', 'update')->name('update');
    });

    // #TEST
    Route::get('/teste', function () {
        return 'Hello, world!';
    })->name('test');
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
