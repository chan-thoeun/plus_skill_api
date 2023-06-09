<?php
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/{path?}', function () {
    return view('welcome');
})->where('path', '.*');
// Route::get('/', function (Request $request) {
//     return view('welcome');
// });
// Route::group(['prefix' => 'admin'], function () {
//     Route::get('/', [Admin\DashboardController::class, 'index']);
// });