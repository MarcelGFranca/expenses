<?php

/* use Illuminate\Http\Request; */
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ExpensesController;

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

/* Route::middleware('auth:sanctum')->get('/user', function (Request $request) { */
/*     return $request->user(); */
/* }); */

Route::post('/expenses/store', [ExpensesController::class, 'store']);
Route::get('/expenses/list', [ExpensesController::class, 'list']);
Route::get('/expenses/list/{id}', [ExpensesController::class, 'show']);
Route::patch('/expenses/edit/{id}', [ExpensesController::class, 'edit']);
Route::delete('/expenses/delete/{id}', [ExpensesController::class, 'delete']);
