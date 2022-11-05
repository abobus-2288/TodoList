<?php

namespace App\GraphQL\Mutations;

use App\Models\User;

class Logout
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        $user = new User();

        $user->tokens()->delete();
        auth()->user()->tokens()->delete();

        return
        [
            'message' => 'Ok'
        ];
    }
}
