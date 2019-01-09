<?php

namespace Tests\Unit;

use App\Book;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithoutMiddleware;

class ApiTest extends TestCase
{
    

    /**
     * Test if books page loads
     *
     * @return void
     */
    public function testIfBooksPageLoads()
    {
        $response = $this->get('/books');
        $response->assertStatus(200);
    }

    /**
     * Test if the response is in JSON with the correct format
     *
     * @return void
     */
    public function testFakeBooks()
    {
        $books = factory(Book::class, 2)->create()->map(function ($book) {
            return $book->only(['author', 'title', 'details', 'pub_date']);
        });

        $this->get(route('books'))
            ->assertStatus(200)
            ->assertJson($books->toArray())
            ->assertJsonStructure([
                '*' => [ 'author', 'title', 'details', 'pub_date' ],
            ]);
    }

    use RefreshDatabase;
}
