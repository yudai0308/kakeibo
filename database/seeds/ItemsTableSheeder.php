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
                    "category_id" => 1,
                    "name" => "食費",
                    "amount" => 1000,
                    "date" => "2019/9/3 00:00:00",
                    "isIncome" => 0,
                ],
                [
                    "account_id" => 1,
                    "user_id" => 1,
                    "category_id" => 1,
                    "name" => "食費",
                    "amount" => 3000,
                    "date" => "2019/9/7 00:00:00",
                    "isIncome" => 0,
                ],
                [
                    "account_id" => 1,
                    "user_id" => 1,
                    "category_id" => 1,
                    "name" => "日用品",
                    "amount" => 500,
                    "date" => "2019/9/12 00:00:00",
                    "isIncome" => 0,
                ],
                [
                    "account_id" => 1,
                    "user_id" => 1,
                    "category_id" => 1,
                    "name" => "交際費",
                    "amount" => 5000,
                    "date" => "2019/9/22 00:00:00",
                    "isIncome" => 0,
                ],
                [
                    "account_id" => 1,
                    "user_id" => 1,
                    "category_id" => 1,
                    "name" => "給料",
                    "amount" => 200000,
                    "date" => "2019/9/25 00:00:00",
                    "isIncome" => 1,
                ],
            ]
        );
    }
}
