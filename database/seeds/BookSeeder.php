<?php

use App\Book;
use Illuminate\Database\Seeder;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Remove existing records
        Book::truncate();

        $faker = \Faker\Factory::create();

        // Generating some FAKE BOOKS
        for ($i = 0; $i < 25; $i++) {
            Book::create([
                'author' => $faker->name,
                'title' => $faker->words(3, true),
                'details' => $faker->sentence,
                'pub_date' => $faker->date
            ]);
        }
    }
}
