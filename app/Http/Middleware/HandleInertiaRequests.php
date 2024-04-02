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
            'auth'  => $this->getAuthUserData($request),
            'flash' => $this->getFlashData($request),
            'ziggy' => $this->getZiggyData($request),
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
        return $request->session()->only(['message', 'id']);
    }

    // auth data
    private function getAuthUserData(Request $request): array
    {
        $user =  $request->user();

        if ($user) {
            $userData = $user->only('id', 'username', 'email', 'avatar_url');
            $role = $user->roles->first();

            $activeYear = AcademicYear::IsActive()->year;

            return [
                'user' => $userData + ['role' => $role],
                'activeYear' => $activeYear,
            ];
        }

        return ['user' => null];
    }
}
