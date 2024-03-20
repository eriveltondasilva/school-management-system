<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{
    GroupController,
    GroupStudentController,
    GroupTeacherController
};

// ===============================================
//# GROUP ROUTES
Route::middleware('auth')
->controller(GroupController::class)
->prefix('turmas')->name('group.')
->group(function () {
    Route::get('/', 'index')->name('index');
    Route::get('/cadastrar', 'create')->name('create');
    Route::post('/', 'store')->name('store');
    // ### ACTIONS ###
    Route::get('/{group}/editar', 'edit')->name('edit');
    Route::put('/{group}', 'update')->name('update');
});


//# GROUP/STUDENTS ROUTES
Route::middleware('auth')
->controller(GroupStudentController::class)
->prefix('turmas/{group}/alunos')->name('group-students.')
->group(function () {
    Route::get('/', 'index')->name('index');
    Route::get('/cadastrar', 'create')->name('create');
    // ### ACTIONS ###
    Route::post('/{student}', 'addStudent')->name('add-student');
    Route::delete('/{student}', 'deleteStudent')->name('delete-student');
});


//# GROUP/TEACHERS ROUTES
Route::middleware('auth')
->controller(GroupTeacherController::class)
->prefix('turmas/{group}/professores')->name('group-teachers.')
->group(function () {
    Route::get('/', 'index')->name('index');
    Route::get('/cadastrar', 'create')->name('create');
    // ### ACTIONS ###
    Route::post('/{teacher}', 'addTeacher')->name('add-teacher');
    Route::delete('/{teacher}', 'deleteTeacher')->name('delete-teacher');
});
