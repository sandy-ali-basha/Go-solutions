<?php

namespace App\Filament\Resources\ContactFooterSettings\Pages;

use App\Filament\Resources\ContactFooterSettings\ContactFooterSettingResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListContactFooterSettings extends ListRecords
{
    protected static string $resource = ContactFooterSettingResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
