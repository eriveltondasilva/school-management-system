<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

// use Illuminate\Support\Facades\Auth;
// use App\Enums\GenderEnum;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {

        // $role = Auth::user()->role;
        return Inertia::render('Dashboard');
    }
}
