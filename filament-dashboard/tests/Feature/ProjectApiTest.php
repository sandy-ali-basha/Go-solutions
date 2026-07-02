<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class ProjectApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_projects_can_be_created_read_updated_and_deleted_via_api(): void
    {
        Storage::fake('public');

        $response = $this->postJson('/api/projects', [
            'title' => 'Launch Event',
            'description' => 'A standout launch experience.',
            'client_name' => 'Acme Brand',
            'event_name' => 'Product Reveal',
            'icon_image' => UploadedFile::fake()->image('icon.png'),
            'gallery_images' => [
                UploadedFile::fake()->image('gallery-1.png'),
                UploadedFile::fake()->image('gallery-2.png'),
            ],
            'card_background_color' => '#ff5722',
        ]);

        $response->assertCreated();
        $response->assertJsonPath('data.title', 'Launch Event');
        $response->assertJsonPath('data.client_name', 'Acme Brand');
        $response->assertJsonPath('data.event_name', 'Product Reveal');
        $response->assertJsonStructure([
            'data' => [
                'id',
                'title',
                'description',
                'client_name',
                'event_name',
                'icon_url',
                'gallery_images',
                'card_background_color',
            ],
        ]);

        $projectId = $response->json('data.id');

        $this->getJson('/api/projects')
            ->assertOk()
            ->assertJsonFragment(['id' => $projectId]);

        $this->getJson('/api/projects/' . $projectId)
            ->assertOk()
            ->assertJsonPath('data.id', $projectId);

        $this->putJson('/api/projects/' . $projectId, [
            'title' => 'Updated Launch Event',
            'description' => 'Updated description.',
        ])
            ->assertOk()
            ->assertJsonPath('data.title', 'Updated Launch Event');

        $this->deleteJson('/api/projects/' . $projectId)
            ->assertOk();

        $this->getJson('/api/projects/' . $projectId)
            ->assertNotFound();
    }
}
