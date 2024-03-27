<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
//
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SocialiteController;
use App\Http\Controllers\DashboardController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

//# WELCOME
Route::get('/', function () {
    $canLogin = Route::has('login');
    $canRegister = Route::has('register');
    $laravelVersion = Application::VERSION;
    $phpVersion = PHP_VERSION;

    return inertia('Welcome', compact('canLogin', 'canRegister', 'laravelVersion', 'phpVersion'));
})->name('welcome');


//# AUTH
Route::middleware('auth')->group(function () {
    //# DASHBOARD
    Route::get('/painel', DashboardController::class)->name('dashboard');

    //# PROFILE
    Route::controller(ProfileController::class)->name('profile.')->group(function () {
        Route::get('perfil/', 'edit')->name('edit');
        Route::patch('perfil/', 'update')->name('update');
        Route::delete('perfil/', 'destroy')->name('destroy');
    });


    //# TEST
    Route::get('/teste', function () {
        return 'Hello, world!';
    })->name('test');
});


//# SOCIALITE
Route::controller(SocialiteController::class)->name('socialite.')->group(function () {
    Route::get('socialite/{provider}/redirect', 'redirect')->name('redirect');
    Route::get('socialite/{provider}/callback', 'callback')->name('callback');
});


// ===============================================
//# ROUTES
require __DIR__.'/auth.php';
//
require __DIR__.'/adminRoutes.php';
require __DIR__.'/teacherRoutes.php';
require __DIR__.'/studentRoutes.php';
