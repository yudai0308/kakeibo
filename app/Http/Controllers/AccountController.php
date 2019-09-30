<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Account;
use App\User;
use \Auth;
use \DB;

class AccountController extends Controller
{
    public function __construct()
    {
        // $this->middleware('auth');
    }

    public function show($id, $hash)
    {
        $account = Account::find($id);
        if ($account->hash != $hash) abort(404);
        // TODO: account の作成者が自分、もしくは公開されている account であることを確認。
        if (!$account->isPublic) {
            if (!Auth::check()) abort(403);
            if ($account->user_id != Auth::user()->id) abort(403);
        }
        $title = $account->title;
        return view("account")->with(["id" => $id, "title" => $title]);
    }

    public function store(Request $req)
    {
        // ユーザーが持っている家計簿が最大数を超えた場合はエラーを返す。
        $cnt = count(Auth::user()->accounts);
        $kakeibo = env("KAKEIBO");
        $max = env("MAX_ACCOUNT");
        if ($cnt >= env("MAX_ACCOUNT")) {
            $errorMsg = "${kakeibo}は 1 ユーザー最大 ${max} つまでとなっています。";
            return ["error" => $errorMsg];
        }

        $account = new Account();
        DB::transaction(function () use ($req, &$account) {
            $account->fill([
                "title" => $req->title,
                "hash" => md5(uniqid(rand(), true)),
                "isPublic" => $req->isPublic,
            ])->save();
            $account->users()->attach(Auth::user());
        });
        $url = Account::getURL($account);
        return [
            "title" => $account->title,
            "url" => $url,
            "isPublic" => $account->isPublic,
        ];
    }
}
