<?php

namespace Database\Seeders;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => "Administrator",
            'email' =>  "adminstrator@gmail.com",
            'password' => Hash::make('123456'),
        ]);
        DB::table('users')->insert([
            'name' => "Teacher",
            'email' =>  "teacher@gmail.com",
            'password' => Hash::make('123456'),
        ]);
        DB::table('users')->insert([
            'name' => "Student",
            'email' =>  "student@gmail.com",
            'password' => Hash::make('123456'),
        ]);
    }
}
