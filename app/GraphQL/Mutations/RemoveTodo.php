<?php

namespace App\GraphQL\Mutations;

use App\Models\Todo;

final class RemoveTodo
{
    /**
     * @param null $_
     * @param array{} $args
     */
    public function __invoke($_, array $args)
    {
        if (Todo::whereId($args['id'])->exists()) {
            $todo = Todo::whereId($args['id'])->first();
            if ($todo->delete()) {
                return [
                    'message' => 'Todo deleted',
                    'status' => 500,
                    'id' => $todo->id
                ];
            } else {
                return [
                    'message' => 'Something went wrong',
                    'status' => 500
                ];
            }
        } else {
            return [
                'message' => 'Todo not found',
                'status' => 404
            ];
        }
    }
}
