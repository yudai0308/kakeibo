<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Item;
use App\User;
use App\Account;
use \Auth;

class ItemController extends Controller
{
    public function store(Request $req)
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

    public function getItemsByMonth($id, $month)
    {
        $account = Account::find($id);
        // TODO: account の作成者が自分、もしくは公開されている account であることを確認。

        if (!is_numeric($month)) return ["error" => "不正なパラメータです。"];
        if ($month < 0 || 12 < $month) return ["error" => "不正なパラメータです。"];
        $items = Item::whereMonth("date", $month)->get();
        $itemGrp = $items->groupBy("date");
        return $itemGrp;
    }
}
