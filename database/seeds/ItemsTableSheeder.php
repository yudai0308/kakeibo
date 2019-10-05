<?php

use Illuminate\Database\Seeder;

class ItemsTableSheeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("items")->insert(
            [
                [
                    "account_id" => 1,
                    "user_id" => 1,
                    "sub_category_id" => 3,
                    "memo" => "食費",
                    "amount" => 1000,
                    "date" => "2019/10/3",
                    "isIncome" => 0,
                ],
                [
                    "account_id" => 1,
                    "user_id" => 1,
                    "sub_category_id" => 3,
                    "memo" => "食費",
                    "amount" => 1500,
                    "date" => "2019/10/3",
                    "isIncome" => 0,
                ],
                [
                    "account_id" => 1,
                    "user_id" => 1,
                    "sub_category_id" => 3,
                    "memo" => "日用品",
                    "amount" => 3000,
                    "date" => "2019/10/3",
                    "isIncome" => 0,
                ],
                [
                    "account_id" => 1,
                    "user_id" => 1,
                    "sub_category_id" => 3,
                    "memo" => "食費",
                    "amount" => 3000,
                    "date" => "2019/10/7",
                    "isIncome" => 0,
                ],
                [
                    "account_id" => 1,
                    "user_id" => 1,
                    "sub_category_id" => 3,
                    "memo" => "交際費",
                    "amount" => 7000,
                    "date" => "2019/10/7",
                    "isIncome" => 0,
                ],
                [
                    "account_id" => 1,
                    "user_id" => 1,
                    "sub_category_id" => 3,
                    "memo" => "日用品",
                    "amount" => 500,
                    "date" => "2019/10/12",
                    "isIncome" => 0,
                ],
                [
                    "account_id" => 1,
                    "user_id" => 1,
                    "sub_category_id" => 3,
                    "memo" => "交際費",
                    "amount" => 5000,
                    "date" => "2019/10/22",
                    "isIncome" => 0,
                ],
                [
                    "account_id" => 1,
                    "user_id" => 1,
                    "sub_category_id" => 3,
                    "memo" => "給料",
                    "amount" => 200000,
                    "date" => "2019/10/25",
                    "isIncome" => 1,
                ],
            ]
        );
    }
}
