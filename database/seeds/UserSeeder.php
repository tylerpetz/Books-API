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
            'name' => 'Tyler',
            'email' => 'tylerpetz@gmail.com',
            'password' => 'tylerpetz',
        ]);

        User::create([
            'name' => 'test',
            'email' => 'test@gmail.com',
            'password' => 'testtest',
        ]);
    }
}
