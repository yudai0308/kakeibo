<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    protected $table = 'accounts';
    public $timestamps = false;
    protected $primaryKey = 'id';

    protected $fillable = [
        'title',
        'hash',
        'isPublic'
    ];

    // リレーション定義
    public function user()
    {
        return $this->belongsTo("App\User");
    }
    public function items()
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
