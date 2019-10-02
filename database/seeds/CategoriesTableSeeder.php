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
                    "name" => "給料",
                    "image" => "sample.jpg"
                ],
                [
                    "name" => "ボーナス",
                    "image" => "sample.jpg"
                ],
                [
                    "name" => "食費",
                    "image" => "sample.jpg"
                ],
                [
                    "name" => "日用品",
                    "image" => "sample.jpg",
                ],
                [
                    "name" => "衣服・美容費",
                    "image" => "sample.jpg",
                ],
                [
                    "name" => "娯楽費",
                    "image" => "sample.jpg"
                ],
                [
                    "name" => "交通費",
                    "image" => "sample.jpg",
                ],
                [
                    "name" => "養育費",
                    "image" => "sample.jpg",
                ],
                [
                    "name" => "医療費",
                    "image" => "sample.jpg"
                ],
                [
                    "name" => "交際費",
                    "image" => "sample.jpg",
                ],
                [
                    "name" => "おこづかい",
                    "image" => "sample.jpg",
                ],
                [
                    "name" => "その他",
                    "image" => "sample.jpg",
                ],
                [
                    "name" => "居住費",
                    "image" => "sample.jpg",
                ],
                [
                    "name" => "電気代",
                    "image" => "sample.jpg",
                ],
                [
                    "name" => "水道代",
                    "image" => "sample.jpg",
                ],
                [
                    "name" => "ガス代",
                    "image" => "sample.jpg",
                ],
                [
                    "name" => "通信費",
                    "image" => "sample.jpg",
                ],
            ]
        );
    }
}
