<?php

use Illuminate\Database\Seeder;

class AccountsTableSheeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("accounts")->insert([
            ["name" => "家計簿"],
            ["name" => "おこづかい帳"],
            ["name" => "サークル収支"],
        ]);
    }
}
