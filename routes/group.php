<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{
    GroupController,
    GroupStudentController,
    GroupTeacherController
};

// ===============================================
Route::middleware('auth')
->prefix('turmas')->name('group.')->group(function () {
    //# GROUP ROUTES
    Route::controller(GroupController::class)->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/cadastrar', 'create')->name('create');
        Route::get('/{group}/editar', 'edit')->name('edit');
        // Route::get('/{group}', 'show')->name('show');
        // ### ACTIONS ###
        Route::post('/', 'store')->name('store');
        Route::put('/{group}', 'update')->name('update');
    });

    //# GROUP/STUDENTS ROUTES
    Route::controller(GroupStudentController::class)
    ->prefix('{group}/alunos')->group(function () {
        Route::get('/', 'listStudents')->name('list-students');
        Route::get('/adicionar', 'addStudent')->name('add-student');
        // ### ACTIONS ###
        Route::post('/{student}', 'storeStudent')->name('store-student');
        Route::delete('/{student}', 'destroyStudent')->name('destroy-student');
    });

    //# GROUP/TEACHERS ROUTES
    Route::controller(GroupTeacherController::class)
    ->prefix('{group}/professores')->group(function () {
        Route::get('/', 'listTeachers')->name('list-teachers');
        Route::get('/adicionar', 'addTeacher')->name('add-teacher');
        // ### ACTIONS ###
        Route::post('/{teacher}', 'storeTeacher')->name('store-teacher');
        Route::delete('/{teacher}', 'destroyTeacher')->name('destroy-teacher');
    });
});
