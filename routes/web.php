<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{
    DashboardController,
    ProfileController,
    SocialiteController,
};

//# WEB ROUTES =================================================================
Route::get('/', function () {
    $canLogin = Route::has('login');
    $canRegister = Route::has('register');
    $laravelVersion = Application::VERSION;
    $phpVersion = PHP_VERSION;

    return inertia('Welcome', compact('canLogin', 'canRegister', 'laravelVersion', 'phpVersion'));
})->name('welcome');


//# AUTH
Route::middleware('auth')->group(function () {
    //* DASHBOARD
    Route::get('/painel', DashboardController::class)->name('dashboard');


    //* PROFILE
    Route::controller(ProfileController::class)
    ->prefix('perfil')->name('profile.')->group(function () {
        //
        Route::get('/', 'edit')->name('edit');
        //* ACTIONS
        Route::patch('/', 'update')->name('update');
        Route::delete('/', 'destroy')->name('destroy');

    });


    //* TEST
    Route::get('/teste', function () {
        return 'Hello, world!';
    })->name('test');
});


//# SOCIALITE
Route::controller(SocialiteController::class)
->prefix('socialite/{provider}')->name('socialite.')->group(function () {
    //
    Route::get('/redirect', 'redirect')->name('redirect');
    Route::get('/callback', 'callback')->name('callback');

});


// ===============================================
//# EXTRA ROUTES
require __DIR__.'/auth.php';
require __DIR__.'/admin.php';
require __DIR__.'/teacher.php';
require __DIR__.'/student.php';
