<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;


// ========================================================================
class DashboardController extends Controller
{
    /** xxx */
    public function __invoke()
    {
        return inertia('Dashboard');
    }
}