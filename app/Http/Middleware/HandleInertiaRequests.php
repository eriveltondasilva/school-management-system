<?php

namespace App\Http\Middleware;

use App\Models\AcademicYear;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => $this->getAuthUserData($request),
            'ziggy' => $this->getZiggyData($request),
            'flash' => $this->getFlashData($request),
        ];
    }

    // ziggy data
    private function getZiggyData(Request $request): array
    {
        return (new Ziggy())->toArray() + ['location' => $request->url()];
    }

    // flash data
    private function getFlashData(Request $request): array
    {
        $message = $request->session()->pull('message');
        $id = $request->session()->pull('id');

        return [
            'message' => $message,
            'id' => $id,
        ];
    }

    // auth data
    private function getAuthUserData(Request $request): array
    {
        $user =  $request->user();

        if ($user) {
            $userWithRoles = $user->load('roles:id,name,display_name');
            $userData = $userWithRoles->only('id', 'username', 'email', 'avatar_url');
            $roles = $userWithRoles->roles[0];

            $activeYear = AcademicYear::select('id', 'year')->IsActive();

            return [
                'user' => $userData + ['roles' => $roles],
                'activeYear' => $activeYear,
            ];
        }

        return ['user' => null];
    }
}
