<?php

namespace App\Filament\Resources\HomeVideos\Pages;

use App\Filament\Resources\HomeVideos\HomeVideoResource;
use Filament\Resources\Pages\CreateRecord;

class CreateHomeVideo extends CreateRecord
{
    protected static string $resource = HomeVideoResource::class;
}
