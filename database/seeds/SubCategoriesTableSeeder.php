<?php

use Illuminate\Database\Seeder;

class SubCategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("sub_categories")->insert(
            [
                [
                    "category_id" => 1,
                    "name" => "給料",
                    "image" => "sample.jpg"
                ],
                [
                    "category_id" => 1,
                    "name" => "ボーナス",
                    "image" => "sample.jpg"
                ],
                [
                    "category_id" => 1,
                    "name" => "その他",
                    "image" => "sample.jpg"
                ],
                [
                    "category_id" => 11,
                    "name" => "食費",
                    "image" => "sample.jpg"
                ],
                [
                    "category_id" => 11,
                    "name" => "日用品",
                    "image" => "sample.jpg",
                ],
                [
                    "category_id" => 11,
                    "name" => "衣服・美容費",
                    "image" => "sample.jpg",
                ],
                [
                    "category_id" => 11,
                    "name" => "娯楽費",
                    "image" => "sample.jpg"
                ],
                [
                    "category_id" => 11,
                    "name" => "交通費",
                    "image" => "sample.jpg",
                ],
                [
                    "category_id" => 11,
                    "name" => "養育費",
                    "image" => "sample.jpg",
                ],
                [
                    "category_id" => 11,
                    "name" => "医療費",
                    "image" => "sample.jpg"
                ],
                [
                    "category_id" => 11,
                    "name" => "交際費",
                    "image" => "sample.jpg",
                ],
                [
                    "category_id" => 11,
                    "name" => "おこづかい",
                    "image" => "sample.jpg",
                ],
                [
                    "category_id" => 11,
                    "name" => "その他",
                    "image" => "sample.jpg",
                ],
                [
                    "category_id" => 12,
                    "name" => "居住費",
                    "image" => "sample.jpg",
                ],
                [
                    "category_id" => 12,
                    "name" => "電気代",
                    "image" => "sample.jpg",
                ],
                [
                    "category_id" => 12,
                    "name" => "水道代",
                    "image" => "sample.jpg",
                ],
                [
                    "category_id" => 12,
                    "name" => "ガス代",
                    "image" => "sample.jpg",
                ],
                [
                    "category_id" => 12,
                    "name" => "通信費",
                    "image" => "sample.jpg",
                ],
            ]
        );
    }
}
