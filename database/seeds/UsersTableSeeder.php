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
            "role_id" => 10,
            "name" => "admin",
            "email" => "admin@localhost",
            "password" => \Hash::make("123456789"),
            "created_at" => date("Y/m/d H:i:s"),
        ]);
    }
}
