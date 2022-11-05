<?php

namespace App\Providers;

use App\Models\Auth\PersonalAccessToken;
use App\Models\Todo;
use App\Observers\TodoObserver;
use Illuminate\Support\ServiceProvider;
use Innocenzi\Vite\Vite;
use Laravel\Sanctum\Sanctum;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Todo::observe(TodoObserver::class);

        Sanctum::usePersonalAccessTokenModel(PersonalAccessToken::class);
    }
}
