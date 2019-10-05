<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $table = 'items';
    public $timestamps = false;
    protected $primaryKey = 'id';

    protected $fillable = [
        'memo', 'amount', 'date', 'isIncome',
        'account_id', 'user_id', 'sub_category_id'
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
    public function sub_category()
    {
        $this->belongsTo("App\SubCategory");
    }
}
