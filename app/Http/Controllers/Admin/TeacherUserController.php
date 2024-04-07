<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Teacher;
use App\Models\User;

use Illuminate\Validation\Rules;
use Illuminate\Http\Request;

class TeacherUserController extends Controller
{
    public function create(Teacher $teacher)
    {
        $hasUser = $teacher->user()->exists();

        // dd($hasUser);

        if ($hasUser) {
            $user = $teacher->user()->first();
            return to_route('admin.teachers.users.edit', [$teacher, $user]);
        }

        return inertia('Admin/TeacherUser/Create', compact('teacher'));
    }

    public function edit(Teacher $teacher, User $user)
    {
        return inertia('Admin/TeacherUser/Edit', compact('teacher', 'user'));
    }

    public function show()
    {

    }

    //# ACTIONS

    public function store(Request $request, Teacher $teacher, User $user)
    {
        $validated = $request->validate([
            'username' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $teacher->user()->create($validated);

        $message = 'Usuário criado com sucesso';
        return to_route('admin.teachers.show', $teacher)->with('message', $message);
    }
    public function update()
    {

    }
    public function destroy()
    {

    }
}
