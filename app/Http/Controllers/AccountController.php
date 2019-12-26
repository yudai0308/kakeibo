<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Account;
use App\User;
use \Auth;
use \DB;
use Exception;

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
        $user = Auth::check() ? Auth::User() : null;
        if ($user != null) {
            // ユーザーが持っている家計簿が最大数を超えた場合はエラーを返す。
            $cnt = count($user->accounts);
            // $kakeibo = env("KAKEIBO", "家計簿");
            $kakeibo = config("env-var.kakeibo");
            // $max = env("MAX_ACCOUNT", 3);
            $max = config("env-var.max_account");
            if ($cnt >= $max) {
                $errorMsg = "${kakeibo}は 1 ユーザー最大 ${max} つまでとなっています。";
                return ["error" => $errorMsg];
            }
        }

        $account = new Account();
        $userId = $user != null ? $user->id : null;
        $isPublic = $user != null ? $req->isPublic : true;
        DB::transaction(function () use ($req, &$account, $userId, $isPublic) {
            $account->fill([
                "user_id" => $userId,
                "title" => $req->title,
                "hash" => md5(uniqid(rand(), true)),
                "isPublic" => $isPublic,
            ])->save();
        });

        $url = Account::getURL($account);
        if ($user != null) {
            return [
                "userId" => $account->user_id,
                "title" => $account->title,
                "url" => $url,
                "isPublic" => $account->isPublic,
            ];
        } else {
            return redirect($url)->with("welcome", true);
        }
    }

    public function update(Request $req, $id)
    {
        if (!Auth::check()) {
            return json_encode(["error" => "ログインしてください。"]);
        }

        $account = Account::find($id);
        if ($account->user->id != Auth::user()->id) {
            abort(403);
        }
        $account->title = $req->title;
        $account->isPublic = $req->isPublic;
        $account->save();
        return;
    }

    public function destroy($id)
    {
        if (!Auth::check()) {
            return json_encode(["error" => "ログインしてください。"]);
        }

        $account = Account::find($id);
        if ($account->user->id != Auth::user()->id) {
            abort(403);
        }
        $account->delete();
        return;
    }
}
