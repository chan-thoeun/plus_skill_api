<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        if ($request->expectsJson() == null) {
            return view('dashbaord');
        }else {
            return view('welcome');
        }
    }
}
