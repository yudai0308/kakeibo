<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Account;
use App\User;
use \Auth;

class AccountController extends Controller
{
    public function store (Request $req)
    {
        // ユーザーが持っている家計簿が最大数を超えた場合はエラーを返す。
        $cnt = count(Auth::user()->accounts);
        $max = env("MAX_ACCOUNT");
        if ($cnt > env("MAX_ACCOUNT")) {
            $errorMsg = env("KAKEIBO") . "は 1 ユーザー最大 " . env("MAX_ACCOUNT") . " つまでとなっています。";
            return json_encode(["error" => $errorMsg]);
        }

        $account = Account::create([
            "name" => $req->name,
            "hash" => md5(uniqid(rand(), true)),
        ]);
        $account->users()->attach(Auth::user());
        $url = $this->getAccountURL($account);
        return json_encode(["url" => $url]);
    }

    public function getAccountURL ($account) {
        $url = route("account.show", [
            "id" => $account->id,
            "hash" => $account->hash,
        ]);
        return $url;
    }
}
