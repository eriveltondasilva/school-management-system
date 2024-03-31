<?php

namespace App\Enums;

/* Enumeração para as permissões de usuário. */
enum PermissionEnum: string
{
    // Permissões para operações de usuário
    case USERS_VIEW   = 'users.view';    // Visualizar usuários
    case USERS_CREATE = 'users.create';  // Criar usuários
    case USERS_EDIT   = 'users.edit';    // Editar usuários
    case USERS_DELETE = 'users.delete';  // Excluir usuários

    // Permissões para operações de aluno
    case STUDENTS_INDEX  = 'students.index';   // Listar alunos
    case STUDENTS_VIEW   = 'students.view';    // Visualizar alunos
    case STUDENTS_CREATE = 'students.create';  // Criar alunos
    case STUDENTS_EDIT   = 'students.edit';    // Editar alunos
    case STUDENTS_DELETE = 'students.delete';  // Excluir alunos


    // Permissões para operações de professor
    case TEACHERS_INDEX  = 'teachers.index';   // Listar professores
    case TEACHERS_VIEW   = 'teachers.view';    // Visualizar professores
    case TEACHERS_CREATE = 'teachers.create';  // Criar professores
    case TEACHERS_EDIT   = 'teachers.edit';    // Editar professores
    case TEACHERS_DELETE = 'teachers.delete';  // Excluir professores

    /* Returns a label based on the role of the user. */
    // public function label(): string
    // {
    //     return match($this) {
    //         static::ADMIN   => 'administrador(a)',
    //     };
    // }
};
