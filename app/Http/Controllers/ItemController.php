<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Request as Request2;
use \Exception;
use \Auth;
use App\Item;
use App\User;
use App\Account;
use App\SubCategory;
use App\Category;
use Carbon\Carbon;

class ItemController extends Controller
{
    public function store(Request $req)
    {
        // TODO: memo の文字数制限 30 文字
        // TODO: 非公開の場合、登録できない
        $userId = Auth::check() ? Auth::user()->id : null;
        try {
            Item::create([
                "user_id"         => $userId,
                "account_id"      => $req->id,
                "sub_category_id" => $req->subCateId,
                "memo"            => $req->memo,
                "amount"          => $req->amount,
                "date"            => $req->date,
                "isIncome"        => $req->isIncome,
            ]);
        } catch (Exception $e) {
            return json_encode(["error" => $e->getMessage()]);
        }
        return;
    }

    public function storeFixedCost(Request $req)
    {
        try {
            $userId = Auth::check() ? Auth::user()->id : null;
            $account = Account::find($req->accountId);
            if (!$account->isPublic && $account->user_id != $userId) {
                abort(403);
            }

            Item::updateOrCreate(
                [
                    "account_id" => $req->accountId,
                    "sub_category_id" => $req->subCategoryId,
                    "date" => $req->date,
                ],
                [
                    "user_id" => $userId,
                    "memo" => null,
                    "amount" => $req->cost,
                    "isIncome" => 0,
                ]
            );
            return json_encode(["success" => "登録完了"]);
        } catch (Exception $e) {
            return json_encode(["error" => $e->getMessage()]);
        }
    }

    public function delete(Request $req)
    {
        try {
            $account = Account::find($req->accountId);
            if (!$account->isPublic) {
                $users = $account->users();
                if ($users->count() != 1) throw new Exception();
                if ($users->first()->id != Auth::user()->id) throw new Exception();
            }
            $item = Item::find($req->itemId);
            $item->delete();
            return;
        } catch (Exception $e) {
            return json_encode(["error" => "削除できませんでした。再度お試しください。"]);
        }
    }

    public function getItems($id)
    {
        $account = Account::find($id);
        // TODO: account の作成者が自分、もしくは公開されている account であることを確認。

        $query = Request2::query();
        try {
            $year = $query["year"];
            $month = $query["month"];
            $base = isset($query["base"]) ? $query["base"] : "date";
            // TODO: year、month のバリデーション
        } catch (Exception $e) {
            // TODO: パラメータが取得できなかった場合の処理。
        }

        try {
            $from = new Carbon("${year}-${month}-01");
            $to = new Carbon("${year}-${month}-01");
            $to->addMonth()->subDay();
            $items = Item::where("account_id", $id)
                ->where("date", ">=", $from->format("Y-m-d"))
                ->where("date", "<=", $to->format("Y-m-d"))
                ->get();
            $fmtItems = $items->map(function ($item, $key) {
                $id = $item->sub_category_id;
                $userName = isset($item->user_id) ? User::find($item->user_id)->name : "ゲスト";
                $subCategory = SubCategory::find($id);
                $category = Category::find($subCategory->category->id);
                $item["user_name"] = $userName;
                $item["sub_category"] = $subCategory->name;
                $item["category_id"] = $category->id;
                $item["category"] = $category->name;
                return $item;
            });
            return $fmtItems;
        } catch (Exception $e) {
            return json_encode(["error" => $e->getMessage()]);
        }
    }
}
