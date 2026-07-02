<?php

namespace App\Filament\Resources\EventMotionStats\Pages;

use App\Filament\Resources\EventMotionStats\EventMotionStatResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListEventMotionStats extends ListRecords
{
    protected static string $resource = EventMotionStatResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
