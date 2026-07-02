<?php

namespace App\Filament\Resources\EventMotionStats\Pages;

use App\Filament\Resources\EventMotionStats\EventMotionStatResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditEventMotionStat extends EditRecord
{
    protected static string $resource = EventMotionStatResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
