<?php

namespace App\Filament\Resources\ContactFooterSettings\Pages;

use App\Filament\Resources\ContactFooterSettings\ContactFooterSettingResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditContactFooterSetting extends EditRecord
{
    protected static string $resource = ContactFooterSettingResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
