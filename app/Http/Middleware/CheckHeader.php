<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckHeader
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
        // return response([$request->header('Accept')]);
       if ($request->header('Accept') !== "application/json") {
            return response()->json([
                "status" => false,
                "message" => "Wrong header format calling, sorry.",
                "data" => [],
            ], 400);
        }
        return $next($request);
    }
}
