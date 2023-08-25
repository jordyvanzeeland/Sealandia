<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login', 'App\Http\Controllers\AuthController@login')->middleware(['api', 'cors']);

Route::middleware('auth:api')->group(function () {
    Route::get('modules', 'App\Http\Controllers\ModulesController@getModules')->middleware(['api', 'cors']);
    Route::get('modules/{id}', 'App\Http\Controllers\ModulesController@getModule')->middleware(['api', 'cors']);
});
