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
})->name('welcome');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::post('/account', 'AccountController@store')->name('account.store');
Route::get('/account/{id}/{hash}', 'AccountController@show')->name('account.show');

Route::group(['prefix' => 'api', 'middleware' => 'api'], function () {
    Route::get('/auth_user', 'UserController@getAuthUser');
    Route::get('/user/accounts', 'UserController@getAccounts');
    Route::put('/account/{id}', 'AccountController@update');
    Route::delete('/account/{id}', 'AccountController@destroy');
    // Route::get('/account/{id}/{year}/{month}', 'ItemController@getItemsByMonth');
    Route::get('/account/{id}/items', 'ItemController@getItems');
    Route::post('/item', 'ItemController@store')->name('item.store');
    Route::post('/item_fixed_cost', 'ItemController@storeFixedCost');
    Route::delete('/item', 'ItemController@delete')->name('item.delete');
    Route::get('/sub_category', 'SubCategoryController@getSubCategories');
});
