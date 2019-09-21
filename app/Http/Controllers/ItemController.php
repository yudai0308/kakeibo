<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Item;
use App\User;
use App\Account;
use \Auth;

class ItemController extends Controller
{
    function store(Request $req)
    {
        $user = Auth::user();
        Item::create([
            "account_id"  => $req->id,
            "user_id"     => $user->id,
            "category_id" => 1,
            "name"        => $req->name,
            "amount"      => $req->amount,
            "date"        => $req->date,
            "isIncome"    => $req->isIncome,
        ]);
        return;
    }
}
