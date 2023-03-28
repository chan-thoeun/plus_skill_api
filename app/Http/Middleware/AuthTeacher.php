<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AuthTeacher
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
        if ( Auth::check() && Auth::user()->isTeacher() ){
            return $next($request);
        }else{
            return response()->json(["message" => "Permission Denied"], 401);
        }
    }
}
