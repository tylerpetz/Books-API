<?php

namespace Tests\Unit;

use Illuminate\Support\Facades\Log;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTest extends TestCase
{

    use RefreshDatabase;

    public function testConnection()
    {
        $response = $this->json('GET', '/');

        $response->assertStatus(200);
    }

    public function testRegistration()
    {
        $response = $this->json('POST', '/api/register', [
            'name' => 'New User',
            'email' => 'newuser@gmail.com',
            'password' => 'newuser'
        ], ['Accept' => 'application/json']);

        Log::info($response->json());
        $response
            ->assertJsonStructure(['data']);
    }

    public function testLogin()
    {
        $response = $this->json('POST', '/api/login', [
            'email' => 'tylerpetz@gmail.com',
            'password' => 'tylerpetz'
        ], ['Accept' => 'application/json']);

        Log::info($response->json());
        $response
            ->assertJsonStructure(['expires_in', 'access_token', 'refresh_token']);
    }
}
