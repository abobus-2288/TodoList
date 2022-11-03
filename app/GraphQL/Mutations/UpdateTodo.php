<?php

namespace App\GraphQL\Mutations;

use App\Models\Todo;

final class UpdateTodo
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        if (Todo::whereId($args['id'])->exists()) {
            $todo = Todo::whereId($args['id'])->first();
            if ($todo->update($args)) {
                event(new \App\Events\TodoUpdated($todo, 'title'));
                return [
                    'message' => 'Todo updated',
                    'status' => 200,
                    'todo' => $todo
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
