<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function getAuthUser () {
        $user = \Auth::user();
        return $user;
    }

    public function getMyAccounts ($id) {
        $user = User::find($id);
        return $user->accounts;
    }
}
