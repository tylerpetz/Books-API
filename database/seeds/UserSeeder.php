<?php

use App\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Remove existing records
        User::truncate();

        User::create([
            'name' => 'admin',
            'email' => 'tylerpetz@gmail.com',
            'password' => 'admin',
        ]);
    }
}
