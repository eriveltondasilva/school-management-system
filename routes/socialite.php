<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SocialiteController;

//# SOCIALITE
Route::middleware('auth')->controller(SocialiteController::class)
->prefix('socialite/{provider}')->name('socialite.')
->group(function () {
    Route::get('/redirect', 'redirect')->name('redirect');
    Route::get('/callback', 'callback')->name('callback');
});