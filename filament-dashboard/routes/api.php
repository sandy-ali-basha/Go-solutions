<?php

use App\Models\HomeVideo;
use App\Models\Industry;
use App\Models\CompanyPortfolio;
use App\Models\ContactFooterSetting;
use App\Models\EventInMotion;
use App\Models\EventMotionStat;
use App\Models\Project;
use App\Models\TrustedClient;
use App\Models\TechSolutionService;
use App\Models\AboutSetting;
use App\Models\Certification;
use App\Models\TeamMember;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;

if (! function_exists('public_file_url')) {
    function public_file_url(?string $path): ?string
    {
        return $path ? url(Storage::url($path)) : null;
    }
}

Route::get('/home-video', function () {
    $video = HomeVideo::query()
        ->where('is_active', true)
        ->orderBy('sort_order')
        ->latest()
        ->first();

    return response()->json([
        'data' => $video ? [
            'id' => $video->id,
            'title' => $video->title,
            'video_url' => public_file_url($video->video_path),
            'poster_url' => public_file_url($video->poster_path),
        ] : null,
    ]);
});

Route::get('/trusted-clients', function () {
    return response()->json([
        'data' => TrustedClient::query()
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get()
            ->map(fn (TrustedClient $client) => [
                'id' => $client->id,
                'name' => $client->name,
                'logo_url' => public_file_url($client->logo_path),
            ]),
    ]);
});

Route::get('/industries', function () {
    return response()->json([
        'data' => Industry::query()
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get()
            ->map(fn (Industry $industry) => [
                'id' => $industry->id,
                'title' => $industry->title,
                'image_url' => public_file_url($industry->image_path),
            ]),
    ]);
});

Route::get('/company-portfolios', function () {
    return response()->json([
        'data' => CompanyPortfolio::query()
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get()
            ->map(fn (CompanyPortfolio $portfolio) => [
                'id' => $portfolio->id,
                'title' => $portfolio->title,
                'description' => $portfolio->description,
                'image_url' => public_file_url($portfolio->image_path),
                'testimonial' => [
                    'name' => $portfolio->testimonial_name,
                    'title' => $portfolio->testimonial_title,
                    'description' => $portfolio->testimonial_description,
                    'company' => $portfolio->testimonial_company,
                    'role' => $portfolio->testimonial_role,
                    'company_logo_url' => public_file_url($portfolio->testimonial_company_logo_path),
                ],
            ]),
    ]);
});

Route::get('/tech-solution-services', function () {
    return response()->json([
        'data' => TechSolutionService::query()
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get()
            ->map(fn (TechSolutionService $service) => [
                'id' => $service->id,
                'title' => $service->title,
                'description' => $service->description,
                'image_url' => public_file_url($service->image_path),
            ]),
    ]);
});

Route::get('/events-in-motion', function () {
    return response()->json([
        'data' => EventInMotion::query()
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get()
            ->map(fn (EventInMotion $event) => [
                'id' => $event->id,
                'title' => $event->title,
                'description' => $event->description,
            ]),
    ]);
});

Route::get('/contact-footer-setting', function () {
    $setting = ContactFooterSetting::query()
        ->where('is_active', true)
        ->latest()
        ->first();

    return response()->json([
        'data' => $setting ? [
            'phone' => $setting->phone,
            'email' => $setting->email,
            'instagram_label' => $setting->instagram_label,
            'instagram_url' => $setting->instagram_url,
            'facebook_url' => $setting->facebook_url,
            'linkedin_url' => $setting->linkedin_url,
            'whatsapp' => $setting->whatsapp,
            'address' => $setting->address,
            'address_url' => $setting->address_url,
        ] : null,
    ]);
});

Route::get('/event-motion-stats', function () {
    return response()->json([
        'data' => EventMotionStat::query()
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get()
            ->map(fn (EventMotionStat $stat) => [
                'id' => $stat->id,
                'left' => $stat->left_value,
                'title' => $stat->left_label,
                'right' => $stat->right_value,
                'subtitle' => $stat->right_label,
                'highlight' => $stat->highlight,
            ]),
    ]);
});

Route::get('/projects', function () {
    return response()->json([
        'data' => Project::query()
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get()
            ->map(fn (Project $project) => [
                'id' => $project->id,
                'title' => $project->title,
                'description' => $project->description,
                'client_name' => $project->client_name,
                'event_name' => $project->event_name,
                'icon_url' => public_file_url($project->icon_path),
                'gallery_images' => array_values(array_filter(array_map(fn (?string $path) => public_file_url($path), (array) $project->gallery_paths ?? []))),
                'card_background_color' => $project->card_background_color,
            ]),
    ]);
});

Route::get('/about', function () {
    return response()->json([
        'data' => AboutSetting::query()
            ->where('is_active', true)
            ->orderBy('order')
            ->orderBy('id')
            ->get()
            ->map(fn (AboutSetting $section) => [
                'id' => $section->id,
                'about_us_id' => $section->about_us_id,
                'title' => $section->title,
                'description' => $section->description,
                'image_url' => public_file_url($section->hero_image),
                'order' => $section->order,
            ]),
    ]);
});

Route::get('/certifications', function () {
    return response()->json([
        'data' => Certification::query()
            ->orderBy('order')
            ->orderBy('id')
            ->get()
            ->map(fn (Certification $certification) => [
                'id' => $certification->id,
                'title' => $certification->title,
                'subtitle' => $certification->subtitle,
                'image_url' => public_file_url($certification->image),
                'order' => $certification->order,
            ]),
    ]);
});

Route::get('/team-members', function () {
    return response()->json([
        'data' => TeamMember::query()
            ->orderBy('order')
            ->orderBy('id')
            ->get()
            ->map(fn (TeamMember $member) => [
                'id' => $member->id,
                'name' => $member->name,
                'position' => $member->position,
                'photo_url' => public_file_url($member->photo),
                'order' => $member->order,
            ]),
    ]);
});

Route::get('/projects/{project}', function (Project $project) {
    return response()->json([
        'data' => [
            'id' => $project->id,
            'title' => $project->title,
            'description' => $project->description,
            'client_name' => $project->client_name,
            'event_name' => $project->event_name,
            'icon_url' => public_file_url($project->icon_path),
            'gallery_images' => array_values(array_filter(array_map(fn (?string $path) => public_file_url($path), (array) $project->gallery_paths ?? []))),
            'card_background_color' => $project->card_background_color,
        ],
    ]);
});

Route::post('/projects', function (Request $request) {
    $data = $request->validate([
        'title' => ['required', 'string', 'max:255'],
        'description' => ['nullable', 'string'],
        'client_name' => ['nullable', 'string', 'max:255'],
        'event_name' => ['nullable', 'string', 'max:255'],
        'icon_image' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:5120'],
        'gallery_images' => ['nullable', 'array'],
        'gallery_images.*' => ['image', 'mimes:jpg,jpeg,png,webp', 'max:5120'],
        'card_background_color' => ['nullable', 'string', 'max:255'],
        'is_active' => ['nullable', 'boolean'],
        'sort_order' => ['nullable', 'integer'],
    ]);

    $project = new Project();
    $project->title = $data['title'];
    $project->description = $data['description'] ?? null;
    $project->client_name = $data['client_name'] ?? null;
    $project->event_name = $data['event_name'] ?? null;
    $project->card_background_color = $data['card_background_color'] ?? null;
    $project->is_active = $data['is_active'] ?? true;
    $project->sort_order = $data['sort_order'] ?? 0;

    if ($request->hasFile('icon_image')) {
        $project->icon_path = $request->file('icon_image')->store('projects/icons', 'public');
    }

    if ($request->hasFile('gallery_images')) {
        $project->gallery_paths = array_values(array_map(fn ($file) => $file->store('projects/gallery', 'public'), $request->file('gallery_images')));
    }

    $project->save();

    return response()->json(['data' => [
        'id' => $project->id,
        'title' => $project->title,
        'description' => $project->description,
        'client_name' => $project->client_name,
        'event_name' => $project->event_name,
        'icon_url' => public_file_url($project->icon_path),
        'gallery_images' => array_values(array_filter(array_map(fn (?string $path) => public_file_url($path), (array) $project->gallery_paths ?? []))),
        'card_background_color' => $project->card_background_color,
    ]], 201);
});

Route::put('/projects/{project}', function (Request $request, Project $project) {
    $data = $request->validate([
        'title' => ['nullable', 'string', 'max:255'],
        'description' => ['nullable', 'string'],
        'client_name' => ['nullable', 'string', 'max:255'],
        'event_name' => ['nullable', 'string', 'max:255'],
        'icon_image' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:5120'],
        'gallery_images' => ['nullable', 'array'],
        'gallery_images.*' => ['image', 'mimes:jpg,jpeg,png,webp', 'max:5120'],
        'card_background_color' => ['nullable', 'string', 'max:255'],
        'is_active' => ['nullable', 'boolean'],
        'sort_order' => ['nullable', 'integer'],
    ]);

    if (array_key_exists('title', $data)) {
        $project->title = $data['title'];
    }
    if (array_key_exists('description', $data)) {
        $project->description = $data['description'];
    }
    if (array_key_exists('client_name', $data)) {
        $project->client_name = $data['client_name'];
    }
    if (array_key_exists('event_name', $data)) {
        $project->event_name = $data['event_name'];
    }
    if (array_key_exists('card_background_color', $data)) {
        $project->card_background_color = $data['card_background_color'];
    }
    if (array_key_exists('is_active', $data)) {
        $project->is_active = $data['is_active'];
    }
    if (array_key_exists('sort_order', $data)) {
        $project->sort_order = $data['sort_order'];
    }

    if ($request->hasFile('icon_image')) {
        $project->icon_path = $request->file('icon_image')->store('projects/icons', 'public');
    }

    if ($request->hasFile('gallery_images')) {
        $project->gallery_paths = array_values(array_map(fn ($file) => $file->store('projects/gallery', 'public'), $request->file('gallery_images')));
    }

    $project->save();

    return response()->json(['data' => [
        'id' => $project->id,
        'title' => $project->title,
        'description' => $project->description,
        'client_name' => $project->client_name,
        'event_name' => $project->event_name,
        'icon_url' => public_file_url($project->icon_path),
        'gallery_images' => array_values(array_filter(array_map(fn (?string $path) => public_file_url($path), (array) $project->gallery_paths ?? []))),
        'card_background_color' => $project->card_background_color,
    ]]);
});

Route::delete('/projects/{project}', function (Project $project) {
    $project->delete();

    return response()->json(['message' => 'Project deleted successfully']);
});
