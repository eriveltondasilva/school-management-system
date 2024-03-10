<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        $canResetPassword = Route::has('password.request');
        $status = session('status');

        return Inertia::render('Auth/Login', compact('canResetPassword', 'status'));
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        // $roleRoutes = [
        //     'admin' => 'Admin/Dashboard',
        //     'coordenator' => 'Coordenator/Dashboard',
        //     'teacher' => 'Teacher/Dashboard',
        //     'student' => 'Student/Dashboard',
        // ];

        // $role = Auth::user()->role->name;
        // $route = $roleRoutes[$role] ?? 'welcome';

        $request->authenticate();
        $request->session()->regenerate();

        return redirect()->intended(RouteServiceProvider::HOME);
        // return redirect()->intended(route($route));
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
