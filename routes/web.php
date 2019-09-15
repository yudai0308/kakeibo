<?php

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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::post('/account', 'AccountController@store')->name('account.store');
Route::get('/account/{id}/{hash}', 'AccountController@show')->name('account.show');

Route::group(["prefix" => "api", "middleware" => "api"], function () {
    Route::get('/auth_user', 'UserController@getAuthUser');
    Route::get('/user/{id}/accounts', 'UserController@getMyAccounts');
});
