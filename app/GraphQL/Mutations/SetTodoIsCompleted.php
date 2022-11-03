<?php

namespace App\GraphQL\Mutations;

use App\Models\Todo;
use Nuwave\Lighthouse\Execution\Utils\Subscription;

final class SetTodoIsCompleted
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        if (Todo::whereId($args['id'])->exists()) {
            $todo = Todo::whereId($args['id'])->first();
            $todo->is_completed = $args['is_completed'];
            if ($todo->save()) {
                event(new \App\Events\TodoUpdated($todo, 'is_completed'));
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
