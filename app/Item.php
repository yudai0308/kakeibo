<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $table = 'items';
    public $timestamps = false;
    protected $primaryKey = 'id';

    protected $fillable = [
        'name', 'amount', 'date', 'isIncome',
        'account_id', 'user_id', 'category_id'
    ];

    // リレーション定義
    public function account()
    {
        $this->belongsTo("App\User");
    }
    public function user()
    {
        $this->belongsTo("App\Account");
    }
    public function category()
    {
        $this->belongsTo("App\Category");
    }
}
