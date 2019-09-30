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
                "user_id" => 1,
                "title" => "家計簿",
                "hash" => md5(uniqid(rand(), true)),
                "isPublic" => true
            ],
            [
                "user_id" => 1,
                "title" => "おこづかい帳",
                "hash" => md5(uniqid(rand(), true)),
                "isPublic" => false,
            ],
            // [
            //     "title" => "サークル収支",
            //     "hash" => md5(uniqid(rand(), true)),
            //     "isPublic" => false,
            // ],
        ]);
    }
}
