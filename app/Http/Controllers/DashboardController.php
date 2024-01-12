<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

// use Illuminate\Support\Facades\Auth;
// use App\Enums\GenderEnum;

class DashboardController extends Controller
{
    //
    public function __invoke(Request $request)
    {
        // $role = Auth::user()->role;
        return inertia('Dashboard');
    }
}
