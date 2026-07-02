<?php

namespace App\Filament\Resources\TechSolutionServices\Pages;

use App\Filament\Resources\TechSolutionServices\TechSolutionServiceResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditTechSolutionService extends EditRecord
{
    protected static string $resource = TechSolutionServiceResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
