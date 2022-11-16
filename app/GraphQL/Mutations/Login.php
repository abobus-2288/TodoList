<?php

namespace App\GraphQL\Mutations;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;

class Login
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        if (User::where('email', $args['email'])->exists()) {
            $user = User::where('email', $args['email'])->first();

            if (Hash::check($args['password'], $user->password)) {
                return [
                    'user' => $user,
                    'message' => 'Successfully signed in',
                    'token' => $user->createToken('auth_token')->plainTextToken,
                ];
            } else {
                return [
                  'message' => 'Passwords don\'t match'
                ];
            }
        } else {
            return [
                'message' => 'User doesn\'t exist'
            ];
        }
    }
}
