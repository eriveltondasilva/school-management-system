<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
//
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SocialiteController;

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
    Route::redirect('/painel', route('admin.dashboard'));

    //# CALENDAR
    Route::get('/calendario', function () {
        return inertia('Calendar');
    })->name('calendar');


    //# PROFILE
    Route::controller(ProfileController::class)->group(function () {
        Route::get('perfil/', 'edit')->name('profile.edit');
        //* ### ACTIONS ###
        Route::patch('perfil/', 'update')->name('profile.update');
        Route::delete('perfil/', 'destroy')->name('profile.destroy');
    });


    //# TEST
    Route::get('/teste', function () {
        return 'Hello, world!';
    })->name('test');
});


//# SOCIALITE
Route::controller(SocialiteController::class)->group(function () {
    Route::get('socialite/{provider}/redirect', 'redirect')->name('socialite.redirect');
    Route::get('socialite/{provider}/callback', 'callback')->name('socialite.callback');
});


// ===============================================
//# ROUTES
require __DIR__.'/auth.php';
//
require __DIR__.'/adminRoutes.php';
require __DIR__.'/teacherRoutes.php';
require __DIR__.'/studentRoutes.php';
