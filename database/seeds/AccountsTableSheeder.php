<?php

use Illuminate\Database\Seeder;

class AccountsTableSheeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return voids
     */
    public function run()
    {
        DB::table("accounts")->insert([
            [
                "id" => 1,
                "user_id" => null,
                "title" => "サンプル家計簿",
                "hash" => "sample-kakeibo",
                "isPublic" => true,
            ],
            [
                "id" => 2,
                "user_id" => 1,
                "title" => "家計簿",
                "hash" => md5(uniqid(rand(), true)),
                "isPublic" => true
            ],
            [
                "id" => 3,
                "user_id" => 1,
                "title" => "おこづかい帳",
                "hash" => md5(uniqid(rand(), true)),
                "isPublic" => false,
            ],
        ]);
    }
}
