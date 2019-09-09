<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    protected $table = 'accounts';
    public $timestamps = false;
    protected $primaryKey = 'id';

    protected $fillable = [
        'name'
    ];

    // リレーション定義
    public function users()
    {
        return $this->belogsToMany("App\User");
    }
    public function item()
    {
        return $this->hasMany("App\Item");
    }
}
