<?php

use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("categories")->insert(
            [
                [
                    "id" => 1,
                    "name" => "収入"
                ],
                [
                    "id" => 11,
                    "name" => "生活費"
                ],
                [
                    "id" => 12,
                    "name" => "固定費"
                ],
            ]
        );
    }
}
