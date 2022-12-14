<?php

namespace App\GraphQL\Mutations;

use App\Models\Todo;
use Nuwave\Lighthouse\Execution\Utils\Subscription;

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
                event(new \App\Events\TodoDeleted($args['id']));
                Subscription::broadcast("TodoDeleted", $args['id']);
                return [
                    'message' => 'Todo deleted',
                    'status' => 200,
                    'id' => $args['id']
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
