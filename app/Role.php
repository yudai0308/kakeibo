<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $table = 'roles';
    public $timestamps = false;
    protected $primaryKey = 'id';
    public $incrementing = false;

    protected $fillable = [
        'name'
    ];

    // リレーション定義
    public function users()
    {
        return $this->hasMany("App\User");
    }
}
