<?php

namespace App\Http\Controllers\Teacher;

use App\Http\Controllers\Controller;
// use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function __invoke()
    {
        $message = 'Você é um(a) professor(a). Por favor, tente novamente mais tarde.';

        return inertia('Dashboard')->with('message', $message);;
    }
}
