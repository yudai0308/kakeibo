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
                "name" => "家計簿",
                "hash" => md5(uniqid(rand(), true)),
                "isPrivate" => true
            ],
            [
                "name" => "おこづかい帳",
                "hash" => md5(uniqid(rand(), true)),
                "isPrivate" => false,
            ],
            // ["name" => "サークル収支", "hash" => md5(uniqid(rand(), true))],
        ]);
    }
}
