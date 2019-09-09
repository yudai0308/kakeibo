<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'categories';
    public $timestamps = fasle;
    protected $primaryKey = 'id';

    protected $fillable = [
        'name', 'image'
    ];

    // リレーション定義
    public function item()
    {
        return $this->hasMany("App\Item");
    }
}
