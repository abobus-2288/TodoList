<?php

namespace App\GraphQL\Mutations;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Response;

class Register
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        if(User::where('email', $args['email'])->exists()) {
            return [
                'message' => 'User already exists'
            ];
        } else {
            $user = User::create([
                'name' => $args['name'],
                'password' => Hash::make($args['password']),
                'email' => $args['email']
            ]);

            if ($user->save()) {
                $token = $user->createToken('auth_token')->plainTextToken;
                $expiresIn = Carbon::now()->addDay();

                return [
                    'user' => $user,
                    'message' => "User successfully registered",
                    'token' => $token
                ];
            } else {
                return [
                    'message' => 'Something went wrong'
                ];
            }
        }
    }
}
