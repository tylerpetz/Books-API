<?php

use Faker\Generator as Faker;

$factory->define(App\Book::class, function (Faker $faker) {
    return [
        'author' => 'David Foster Wallace',
        'title' => 'Infinite Jest',
        'details' => $faker->sentence,
        'pub_date' => '1996-02-01'
    ];
});
