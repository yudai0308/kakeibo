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
                    "memo" => "○○スーパー",
                    "amount" => 1000,
                    "date" => "2019/10/3",
                    "isIncome" => 0,
                ],
                [
                    "account_id" => 1,
                    "user_id" => 1,
                    "sub_category_id" => 3,
                    "memo" => "ファミマ",
                    "amount" => 1500,
                    "date" => "2019/10/3",
                    "isIncome" => 0,
                ],
                [
                    "account_id" => 1,
                    "user_id" => 1,
                    "sub_category_id" => 5,
                    "memo" => "○○ドラッグストア",
                    "amount" => 3000,
                    "date" => "2019/10/3",
                    "isIncome" => 0,
                ],
                [
                    "account_id" => 1,
                    "user_id" => 1,
                    "sub_category_id" => 11,
                    "memo" => "飲み会",
                    "amount" => 3000,
                    "date" => "2019/10/7",
                    "isIncome" => 0,
                ],
                [
                    "account_id" => 1,
                    "user_id" => 1,
                    "sub_category_id" => 6,
                    "memo" => "洋服購入",
                    "amount" => 7000,
                    "date" => "2019/10/7",
                    "isIncome" => 0,
                ],
                [
                    "account_id" => 1,
                    "user_id" => 1,
                    "sub_category_id" => 8,
                    "memo" => "新宿まで",
                    "amount" => 500,
                    "date" => "2019/10/12",
                    "isIncome" => 0,
                ],
                [
                    "account_id" => 1,
                    "user_id" => 1,
                    "sub_category_id" => 11,
                    "memo" => "歓送迎会",
                    "amount" => 5000,
                    "date" => "2019/10/22",
                    "isIncome" => 0,
                ],
                [
                    "account_id" => 1,
                    "user_id" => 1,
                    "sub_category_id" => 1,
                    "memo" => "",
                    "amount" => 200000,
                    "date" => "2019/10/25",
                    "isIncome" => 1,
                ],
            ]
        );
    }
}
