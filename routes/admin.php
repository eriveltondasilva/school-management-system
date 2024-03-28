<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\{
    AcademicYearController,
    DashboardController,
    GroupController,
    GroupStudentController,
    GroupTeacherController,
    StudentController,
    SubjectController,
    TeacherController,
};

// ===============================================
Route::middleware(['auth'])->prefix('admin')->name('admin.')->group(function () {
    //# DASHBOARD ROUTES
    Route::get('painel', DashboardController::class)->name('dashboard');


    //# CALENDAR
    Route::get('/calendario', function () {
        return inertia('Calendar');
    })->name('calendar');


    // #ACADEMIC YEAR ROUTES
    Route::controller(AcademicYearController::class)
    ->prefix('ano-letivo')->name('academic-year.')->group(function () {

        Route::get('/', 'index')->name('index');
        Route::get('/cadastrar', 'create')->name('create');
        Route::get('/{academicYear}/editar', 'edit')->name('edit');
        //* ACTIONS
        Route::post('/', 'store')->name('store');
        Route::put('/{academicYear}', 'update')->name('update');
        Route::put('/{academicYear}/atualizar-status', 'updateStatus')->name('update-status');

    });


    //# GROUP ROUTES
    Route::controller(GroupController::class)
    ->prefix('turmas')->name('group.')->group(function () {

        Route::get('/', 'index')->name('index');
        Route::get('/cadastrar', 'create')->name('create');
        Route::get('/{group}/editar', 'edit')->name('edit');
        //* ACTIONS
        Route::post('/', 'store')->name('store');
        Route::put('/{group}', 'update')->name('update');

    });


    //# GROUP/STUDENT ROUTES
    Route::controller(GroupStudentController::class)
    ->prefix('turmas/{group}/alunos')->name('group.')->group(function () {

        Route::get('/', 'listStudents')->name('list-students');
        Route::get('/adicionar', 'addStudents')->name('add-students');
        //* ACTIONS
        Route::post('/{student}', 'storeStudent')->name('store-student');
        Route::delete('/{student}', 'destroyStudent')->name('destroy-student');

    });


    //# GROUP/TEACHER ROUTES
    Route::controller(GroupTeacherController::class)
    ->prefix('turmas/{group}/professores')->name('group.')->group(function () {

        Route::get('/', 'listTeachers')->name('list-teachers');
        Route::get('/adicionar', 'addTeachers')->name('add-teachers');
        //* ACTIONS
        Route::post('/{teacher}', 'storeTeacher')->name('store-teacher');
        Route::delete('/{teacher}', 'destroyTeacher')->name('destroy-teacher');

    });


    //# STUDENT ROUTES
    Route::controller(StudentController::class)
    ->prefix('alunos')->name('student.')->group(function () {

        Route::get('/', 'index')->name('index');
        Route::get('/cadastrar', 'create')->name('create');
        Route::get('/{student}', 'show')->name('show');
        Route::get('/{student}/editar', 'edit')->name('edit');
        //* ACTIONS
        Route::post('/', 'store')->name('store');
        Route::put('/{student}', 'update')->name('update');

    });


    //# SUBJECT ROUTES
    Route::controller(SubjectController::class)
    ->prefix('disciplinas')->name('subject.')->group(function () {

        Route::get('/', 'index')->name('index');
        Route::get('/{subject}/professores', 'listTeachers')->name('list-teachers');
        Route::get('/{subject}/professores/adicionar', 'addTeachers')->name('add-teachers');
        //* ACTIONS
        Route::post('/{subject}/professores/{teacher}', 'storeTeacher')->name('store-teacher');
        Route::delete('/{subject}/professores/{teacher}', 'destroyTeacher')->name('destroy-teacher');

    });


    //# TEACHER ROUTES
    Route::controller(TeacherController::class)
    ->prefix('professores')->name('teacher.')->group(function () {

        Route::get('/', 'index')->name('index');
        Route::get('/cadastrar', 'create')->name('create');
        Route::get('/{teacher}', 'show')->name('show');
        Route::get('/{teacher}/editar', 'edit')->name('edit');
        //* ACTIONS
        Route::post('/', 'store')->name('store');
        Route::put('/{teacher}', 'update')->name('update');

    });
});
