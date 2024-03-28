<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Enums\ProviderEnum;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

// ===============================================
class SocialiteController extends Controller
{
    public function redirect(ProviderEnum $provider)
    {
        return Socialite::driver($provider->value)->redirect();
    }

    public function callback(ProviderEnum $provider)
    {
        $providerUser = Socialite::driver($provider->value)->user();

        $user = User::where('email', $providerUser->getEmail())->firstOrFail();

        $user->update([
            'avatar_url' => $providerUser->getAvatar(),
            'provider_id' => $providerUser->getId(),
            'provider_name' => $provider->value,
        ]);

        Auth::login($user);

        return to_route('dashboard');
    }
}
