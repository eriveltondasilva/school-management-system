<?php

namespace App\Http\Controllers;

use App\Enums\GenderEnum;
use Illuminate\Http\Request;
// use Inertia\Inertia;
// use App\Enums\GenderEnum;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {

        // $role = Auth::user()->role;
        // return Inertia::render('Dashboard');
        // dd(Auth::user()->role);
        dd(GenderEnum::values());
    }
}

