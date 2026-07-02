<?php

namespace App\Filament\Resources\ContactFooterSettings;

use App\Filament\Resources\ContactFooterSettings\Pages\CreateContactFooterSetting;
use App\Filament\Resources\ContactFooterSettings\Pages\EditContactFooterSetting;
use App\Filament\Resources\ContactFooterSettings\Pages\ListContactFooterSettings;
use App\Filament\Resources\ContactFooterSettings\Schemas\ContactFooterSettingForm;
use App\Filament\Resources\ContactFooterSettings\Tables\ContactFooterSettingsTable;
use App\Models\ContactFooterSetting;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class ContactFooterSettingResource extends Resource
{
    protected static ?string $model = ContactFooterSetting::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $navigationLabel = 'Contact & Footer';

    protected static ?string $modelLabel = 'Contact & Footer Setting';

    protected static ?string $pluralModelLabel = 'Contact & Footer Settings';

    public static function form(Schema $schema): Schema
    {
        return ContactFooterSettingForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return ContactFooterSettingsTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListContactFooterSettings::route('/'),
            'create' => CreateContactFooterSetting::route('/create'),
            'edit' => EditContactFooterSetting::route('/{record}/edit'),
        ];
    }
}
