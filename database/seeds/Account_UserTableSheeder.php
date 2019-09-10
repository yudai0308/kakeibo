<?php

use Illuminate\Database\Seeder;

class Account_UserTableSheeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("account_user")->insert([
            [
                "account_id" => 1,
                "user_id" => 1,
            ],
            [
                "account_id" => 2,
                "user_id" => 1,
            ],
            [
                "account_id" => 3,
                "user_id" => 1,
            ],
        ]);
    }
}
