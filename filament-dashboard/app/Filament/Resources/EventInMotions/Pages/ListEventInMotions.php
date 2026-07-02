<?php

namespace App\Filament\Resources\EventInMotions\Pages;

use App\Filament\Resources\EventInMotions\EventInMotionResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListEventInMotions extends ListRecords
{
    protected static string $resource = EventInMotionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
