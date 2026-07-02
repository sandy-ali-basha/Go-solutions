<?php

use App\Models\HomeVideo;
use App\Models\Industry;
use App\Models\CompanyPortfolio;
use App\Models\ContactFooterSetting;
use App\Models\EventInMotion;
use App\Models\EventMotionStat;
use App\Models\TrustedClient;
use App\Models\TechSolutionService;
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
