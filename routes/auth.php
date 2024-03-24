<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\{
    AuthenticatedSessionController,
    ConfirmablePasswordController,
    EmailVerificationNotificationController,
    EmailVerificationPromptController,
    NewPasswordController,
    PasswordController,
    PasswordResetLinkController,
    RegisteredUserController,
    VerifyEmailController
};

// ==========================================================================
Route::middleware('guest')->group(function () {
    //# REGISTER
    Route::controller(RegisteredUserController::class)->group(function () {
        Route::get('register', 'create')->name('register');
        Route::post('register', 'store');
    });

    //# LOGIN
    Route::controller(AuthenticatedSessionController::class)->group(function () {
        Route::get('login', 'create')->name('login');
        Route::post('login', 'store');
    });

    //# FORGOT PASSWORD
    Route::controller(PasswordResetLinkController::class)->group(function () {
        Route::get('forgot-password', 'create')->name('password.request');
        Route::post('forgot-password', 'store')->name('password.email');
    });

    //# RESET PASSWORD
    Route::controller(NewPasswordController::class)->group(function () {
        Route::get('reset-password/{token}', 'create')->name('password.reset');
        Route::post('reset-password', 'store')->name('password.store');
    });
});


Route::middleware('auth')->group(function () {
    //# VERIFY EMAIL
    Route::get('verify-email', EmailVerificationPromptController::class)->name('verification.notice');
    Route::get('verify-email/{id}/{hash}', VerifyEmailController::class)->middleware(['signed', 'throttle:6,1'])->name('verification.verify');


    //# SEND EMAIL VERIFICATION
    Route::controller(EmailVerificationNotificationController::class)->group(function () {
        Route::post('email/verification-notification', 'store')->middleware('throttle:6,1')->name('verification.send');
    });


    //# CONFIRM PASSWORD
    Route::controller(ConfirmablePasswordController::class)->group(function () {
        Route::get('confirm-password', 'show')->name('password.confirm');
        Route::post('confirm-password', 'store');
    });


    //# UPDATE PASSWORD
    Route::controller(PasswordController::class)->group(function () {
        Route::put('password', 'update')->name('password.update');
    });


    //# LOGOUT
    Route::controller(AuthenticatedSessionController::class)->group(function () {
        Route::post('logout', 'destroy')->name('logout');
    });
});
