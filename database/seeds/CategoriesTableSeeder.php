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
        DB::table("categories")->insert([
                [
                    "name" => "食費",
                    "image" => "sample.jpg"
                ],
                [
                    "name" => "外食費",
                    "image" => "sample.jpg",
                ],
                [
                    "name" => "日用品",
                    "image" => "sample.jpg",
                ],
            ]
        );
    }
}
