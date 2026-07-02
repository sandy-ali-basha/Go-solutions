<?php

namespace App\Filament\Resources\TechSolutionServices\Pages;

use App\Filament\Resources\TechSolutionServices\TechSolutionServiceResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListTechSolutionServices extends ListRecords
{
    protected static string $resource = TechSolutionServiceResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
