<?php

use Illuminate\Http\Request;
use App\Book;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// List books
Route::get('books', 'BookController@index');

// One Book
Route::get('books/{book}', 'BookController@show');

// Add Book
Route::post('books', 'BookController@store');

// Update Book
Route::put('books/{book}', 'BookController@update');

// Delete Book
Route::delete('books/{book}', 'BookController@delete');
