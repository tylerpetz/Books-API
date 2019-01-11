<?php

namespace Tests\Unit;

use Illuminate\Support\Facades\Log;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTest extends TestCase
{
    public function testConnection()
    {
        $response = $this->json('GET', '/');

        $response->assertStatus(200);
    }

    public function testLogin()
    {
        $response = $this->json('POST', '/api/login', [
            'email' => 'tylerpetz@gmail.com',
            'password' => 'admin'
        ], ['Accept' => 'application/json']);

        Log::info($response);
        $response
            ->assertJsonStructure(['expires_in','access_token','refresh_token']);
    }
}
