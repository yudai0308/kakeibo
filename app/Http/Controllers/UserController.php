<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Account;
use \Auth;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function getAuthUser () {
        $user = Auth::user();
        return $user;
    }

    public function getAccounts () {
        try {
            $user = Auth::user();
            $accounts = $user->accounts()->orderBy("id", "desc")->get();
            $returnVal = [];
            foreach($accounts as $a) {
                $url = Account::getURL($a);
                array_push($returnVal, [
                        "title" => $a->title,
                        "url" => $url,
                        "isPublic" => $a->isPublic,
                    ]);
                }
            return $returnVal;
        } catch(Exception $e) {
            // dd($e->getMessage());
        }
    }
}
