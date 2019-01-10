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

Route::post('register', 'Auth\RegisterController@register');

Route::post('login', 'Auth\LoginController@login');

Route::post('logout', 'Auth\LoginController@logout');

Route::group(['prefix' => 'books', 'middleware' => 'auth:api'], function() {

    // List books
    Route::get('/', 'BookController@index')->name('books');

    // One Book
    Route::get('/{book}', 'BookController@show')->name('books.show');

    // Add Book
    Route::post('/', 'BookController@store')->name('books.store');

    // Update Book
    Route::put('/{book}', 'BookController@update')->name('books.update');

    // Delete Book
    Route::delete('/{book}', 'BookController@delete')->name('books.delete');

});