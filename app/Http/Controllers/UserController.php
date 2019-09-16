<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use \Auth;
use Exception;

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

    public function getMyAccounts () {
        try {
            $user = Auth::user();
            $accounts = $user->accounts;
            $returnVal = [];
            foreach($accounts as $a) {
                array_push($returnVal, [
                    "title" => $a->name,
                    "hash" => $a->hash,
                    ]);
                }
            return $returnVal;
        } catch(Exception $e) {
            dd($e->getMessage());
        }
    }
}
