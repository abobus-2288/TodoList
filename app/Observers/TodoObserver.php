<?php

namespace App\Observers;

use App\Models\Todo;
use Nuwave\Lighthouse\Execution\Utils\Subscription;

class TodoObserver
{
    /**
     * Handle the Todo "created" event.
     *
     * @param  \App\Models\Todo  $todo
     * @return void
     */
    public function created(Todo $todo)
    {
        event(new \App\Events\TodoCreated($todo));
        Subscription::broadcast("TodoCreated", $todo);
    }

    /**
     * Handle the Todo "updated" event.
     *
     * @param  \App\Models\Todo  $todo
     * @return void
     */
    public function updated(Todo $todo)
    {
        event(new \App\Events\TodoUpdated($todo));
        Subscription::broadcast("TodoUpdated", $todo);
    }

    /**
     * Handle the Todo "deleted" event.
     *
     * @param  \App\Models\Todo  $todo
     * @return void
     */
    public function deleted(Todo $todo)
    {
        event(new \App\Events\TodoDeleted());
        Subscription::broadcast("TodoDeleted", $todo);
    }

    /**
     * Handle the Todo "restored" event.
     *
     * @param  \App\Models\Todo  $todo
     * @return void
     */
    public function restored(Todo $todo)
    {
        //
    }

    /**
     * Handle the Todo "force deleted" event.
     *
     * @param  \App\Models\Todo  $todo
     * @return void
     */
    public function forceDeleted(Todo $todo)
    {
        //
    }
}
