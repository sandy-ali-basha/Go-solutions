<?php

namespace App\Filament\Resources\AboutSettings;

use App\Filament\Resources\AboutSettings\Pages\CreateAboutSetting;
use App\Filament\Resources\AboutSettings\Pages\EditAboutSetting;
use App\Filament\Resources\AboutSettings\Pages\ListAboutSettings;
use App\Filament\Resources\AboutSettings\Schemas\AboutSettingForm;
use App\Filament\Resources\AboutSettings\Tables\AboutSettingsTable;
use App\Models\AboutSetting;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class AboutSettingResource extends Resource
{
    protected static ?string $model = AboutSetting::class;

    protected static string|BackedEnum|null $navigationIcon = null;

    protected static ?string $navigationLabel = 'About';

    protected static ?int $navigationSort = 1;

    protected static ?string $modelLabel = 'About Section';

    protected static ?string $pluralModelLabel = 'About Sections';

    protected static UnitEnum|string|null $navigationGroup = 'Our Services';

    public static function form(Schema $schema): Schema
    {
        return AboutSettingForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return AboutSettingsTable::configure($table);
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
            'index' => ListAboutSettings::route('/'),
            'create' => CreateAboutSetting::route('/create'),
            'edit' => EditAboutSetting::route('/{record}/edit'),
        ];
    }
}
