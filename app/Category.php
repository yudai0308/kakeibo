<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'categories';
    public $timestamps = false;
    protected $primaryKey = 'id';

    protected $fillable = ['name'];

    // リレーション定義
    public function sub_categories()
    {
        return $this->hasMany("App\SubCategory");
    }
}
