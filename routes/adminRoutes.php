<?php

use Illuminate\Support\Facades\Route;
//
use App\Http\Controllers\{
    DashboardController,
    AcademicYearController,
    GroupController,
    GroupStudentController,
    GroupTeacherController,
    StudentController,
    SubjectController,
    TeacherController
};

// ===============================================
Route::middleware(['auth'])->prefix('admin')->name('admin.')->group(function () {
    //# DASHBOARD ROUTES
    Route::get('painel', [DashboardController::class, 'index'])->name('dashboard');


    // #ACADEMIC YEAR ROUTES
    Route::controller(AcademicYearController::class)->group(function () {
        Route::get('ano-letivo/', 'index')->name('academic-year.index');
        Route::get('ano-letivo/cadastrar', 'create')->name('academic-year.create');
        Route::get('ano-letivo/{academicYear}/editar', 'edit')->name('academic-year.edit');
        //* ### ACTIONS ###
        Route::post('ano-letivo/', 'store')->name('academic-year.store');
        Route::put('ano-letivo/{academicYear}', 'update')->name('academic-year.update');
        Route::put('ano-letivo/{academicYear}/atualizar-status', 'updateStatus')->name('academic-year.update-status');
    });


    //# GROUP ROUTES
    Route::controller(GroupController::class)->group(function () {
        Route::get('turmas/', 'index')->name('group.index');
        Route::get('turmas/cadastrar', 'create')->name('group.create');
        Route::get('turmas/{group}/editar', 'edit')->name('group.edit');
        //* ### ACTIONS ###
        Route::post('turmas/', 'store')->name('group.store');
        Route::put('turmas/{group}', 'update')->name('group.update');
    });


    //# GROUP/STUDENT ROUTES
    Route::controller(GroupStudentController::class)->group(function () {
        Route::get('turmas/{group}/alunos/', 'listStudents')->name('group.list-students');
        Route::get('turmas/{group}/alunos/adicionar', 'addStudents')->name('group.add-students');
        //* ### ACTIONS ###
        Route::post('turmas/{group}/alunos/{student}', 'storeStudent')->name('group.store-student');
        Route::delete('turmas/{group}/alunos/{student}', 'destroyStudent')->name('group.destroy-student');
    });


    //# GROUP/TEACHER ROUTES
    Route::controller(GroupTeacherController::class)->group(function () {
        Route::get('turmas/{group}/professores/', 'listTeachers')->name('group.list-teachers');
        Route::get('turmas/{group}/professores/adicionar', 'addTeachers')->name('group.add-teachers');
        //* ### ACTIONS ###
        Route::post('turmas/{group}/professores/{teacher}', 'storeTeacher')->name('group.store-teacher');
        Route::delete('turmas/{group}/professores/{teacher}', 'destroyTeacher')->name('group.destroy-teacher');
    });


    //# STUDENT ROUTES
    Route::controller(StudentController::class)->group(function () {
        Route::get('alunos/', 'index')->name('student.index');
        Route::get('alunos/cadastrar', 'create')->name('student.create');
        Route::get('alunos/{student}', 'show')->name('student.show');
        Route::get('alunos/{student}/editar', 'edit')->name('student.edit');
        //* ### ACTIONS ###
        Route::post('alunos/', 'store')->name('student.store');
        Route::put('alunos/{student}', 'update')->name('student.update');
    });


    //# SUBJECT ROUTES
    Route::controller(SubjectController::class)->group(function () {
        Route::get('disciplinas/', 'index')->name('subject.index');
        Route::get('disciplinas/{subject}/professores', 'listTeachers')->name('subject.list-teachers');
        Route::get('disciplinas/{subject}/professores/adicionar', 'addTeachers')->name('subject.add-teachers');
        //* ### ACTIONS ###
        Route::post('disciplinas/{subject}/professores/{teacher}', 'storeTeacher')->name('subject.store-teacher');
        Route::delete('disciplinas/{subject}/professores/{teacher}', 'destroyTeacher')->name('subject.destroy-teacher');
    });


    //# TEACHER ROUTES
    Route::controller(TeacherController::class)->group(function () {
        Route::get('professores/', 'index')->name('teacher.index');
        Route::get('professores/cadastrar', 'create')->name('teacher.create');
        Route::get('professores/{teacher}', 'show')->name('teacher.show');
        Route::get('professores/{teacher}/editar', 'edit')->name('teacher.edit');
        //* ### ACTIONS ###
        Route::post('professores/', 'store')->name('teacher.store');
        Route::put('professores/{teacher}', 'update')->name('teacher.update');
    });
});
