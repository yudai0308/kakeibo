<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SubCategory extends Model
{
    protected $table = 'sub_categories';
    public $timestamps = false;
    protected $primaryKey = 'id';

    protected $fillable = [
        'category_id', 'name', 'image'
    ];

    // リレーション定義
    public function items()
    {
        return $this->hasMany("App\Item");
    }
    public function category()
    {
        return $this->belongsTo("App\SubCategory");
    }
}
