<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    protected $table = 'accounts';
    public $timestamps = false;
    protected $primaryKey = 'id';

    protected $fillable = [
        'name',
        'hash',
    ];

    // リレーション定義
    public function users()
    {
        return $this->belongsToMany("App\User");
    }
    public function item()
    {
        return $this->hasMany("App\Item");
    }

    // ライブラリー
    static public function getURL(Account $account)
    {
        $url = route("account.show", [
            "id" => $account->id,
            "hash" => $account->hash,
        ]);
        return $url;
    }
}
