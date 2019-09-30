<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    protected $table = 'users';
    public $timestamps = true;
    protected $primaryKey = 'id';

    protected $fillable = [
        'name', 'email', 'password', 'role_id'
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    // リレーション定義
    public function accounts()
    {
        return $this->hasMany("App\Account");
    }
    public function items()
    {
        return $this->hasMany("App\Item");
    }
    public function role()
    {
        return $this->belongsTo("App\Role");
    }
}
