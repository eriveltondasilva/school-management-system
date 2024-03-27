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
        ];
    }


    // ziggy data
    private function getZiggyData(Request $request): array
    {
        return (new Ziggy())->toArray() + ['location' => $request->url()];
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
