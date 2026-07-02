<?php

namespace App\Filament\Resources\EventInMotions\Pages;

use App\Filament\Resources\EventInMotions\EventInMotionResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditEventInMotion extends EditRecord
{
    protected static string $resource = EventInMotionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
