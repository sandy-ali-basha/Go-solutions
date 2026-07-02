<?php

namespace Tests\Feature;

use App\Models\AboutSetting;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AboutApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_about_endpoint_returns_active_sections(): void
    {
        AboutSetting::create([
            'about_us_id' => 31,
            'title' => 'Welcome',
            'description' => 'Welcome section text',
            'hero_image' => null,
            'order' => 1,
            'is_active' => true,
        ]);

        $this->getJson('/api/about')
            ->assertOk()
            ->assertJsonCount(1, 'data')
            ->assertJsonPath('data.0.about_us_id', 31)
            ->assertJsonPath('data.0.title', 'Welcome');
    }
}
