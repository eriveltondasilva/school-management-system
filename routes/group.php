<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GroupController;

// ===============================================
//# GROUP ROUTES
Route::middleware('auth')
->controller(GroupController::class)
->prefix('turmas')->name('group.')
->group(function () {
    Route::get('/', 'index')->name('index');
    Route::get('/cadastrar', 'create')->name('create');
    Route::post('/', 'store')->name('store');
    // #####
    Route::get('/{group}/editar', 'edit')->name('edit');
    Route::put('/{group}', 'update')->name('update');
});
