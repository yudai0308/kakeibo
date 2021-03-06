<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("users")->insert([
            [
                "id" => 1,
                "role_id" => 10,
                "name" => "admin",
                "email" => null,
                "password" => \Hash::make("123456789"),
                "created_at" => date("Y/m/d H:i:s"),
            ],
            [
                "id" => 2,
                "role_id" => 20,
                "name" => "ユーザーA",
                "email" => null,
                "password" => \Hash::make("123456789"),
                "created_at" => date("Y/m/d H:i:s"),
            ],
            [
                "id" => 3,
                "role_id" => 20,
                "name" => "ユーザーB",
                "email" => null,
                "password" => \Hash::make("123456789"),
                "created_at" => date("Y/m/d H:i:s"),
            ]
        ]);
    }
}
