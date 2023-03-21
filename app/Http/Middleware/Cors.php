<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        return $next($request)
        ->header('allowed_origins', '*')
        ->header('allowed_methods', 'GET, POST, PUT, DELETE, OPTIONS')
        ->header('allowed_headers', 'Origin, Content-Type, Accept, Authorization, X-Request-With');

        // return [
        //     'allowed_methods' => ['*'],
        //     'allowed_origins' => ['*'],
        //     'allowed_origins_patterns' => [],
        //     'allowed_headers' => ['Authorization'],
        //     'exposed_headers' => [],
        //     'max_age' => 0,
        //     'supports_credentials' => false,
        // ]);
    }
}
