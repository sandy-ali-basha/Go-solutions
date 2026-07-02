<?php

namespace App\Filament\Resources\HomeVideos\Pages;

use App\Filament\Resources\HomeVideos\HomeVideoResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListHomeVideos extends ListRecords
{
    protected static string $resource = HomeVideoResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
