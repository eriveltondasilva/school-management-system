<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function __invoke()
    {
        $user = auth()->user();
        if ($user->hasRole('admin')) {
            return to_route('admin.dashboard');
        }

        if ($user->hasRole('teacher')) {
            return to_route('teacher.dashboard');
        }

        if ($user->hasRole('student')) {
            return to_route('student.dashboard');
        }

        return inertia('Dashboard')->with('message', 'Something went wrong. Please try again later.');
    }
}
