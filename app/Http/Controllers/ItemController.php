<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Request as Request2;
use \Exception;
use \Auth;
use App\Item;
use App\User;
use App\Account;
use Carbon\Carbon;

class ItemController extends Controller
{
    public function store(Request $req)
    {
        $user = Auth::user();
        try {
            Item::create([
                "account_id"  => $req->id,
                "user_id"     => $user->id,
                "category_id" => 1,
                "name"        => $req->name,
                "amount"      => $req->amount,
                "date"        => $req->date,
                "isIncome"    => $req->isIncome,
            ]);
        } catch (Exception $e) {
            return $e->getMessage();
        }
        return;
    }

    public function getItemsByMonth($id)
    {
        $account = Account::find($id);
        // TODO: account の作成者が自分、もしくは公開されている account であることを確認。

        $query = Request2::query();
        try {
            $year = $query["year"];
            $month = $query["month"];
            // TODO: year、month のバリデーション
        } catch (Exception $e) {
            // TODO: パラメータが取得できなかった場合の処理。
        }

        $from = new Carbon("${year}-${month}-01");
        $to = new Carbon("${year}-${month}-01");
        $to->addMonth()->subDay();
        $items = Item::where("date", ">=", $from->format("Y-m-d"))
            ->where("date", "<", $to->format("Y-m-d"))
            ->get();
        // $items = Item::whereMonth("date", $params->month)->get();
        $itemGrp = $items->groupBy("date");
        return $itemGrp;
    }
}
