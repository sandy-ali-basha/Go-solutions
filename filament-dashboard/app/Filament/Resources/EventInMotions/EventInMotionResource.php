<?php

namespace App\Filament\Resources\EventInMotions;

use App\Filament\Resources\EventInMotions\Pages\CreateEventInMotion;
use App\Filament\Resources\EventInMotions\Pages\EditEventInMotion;
use App\Filament\Resources\EventInMotions\Pages\ListEventInMotions;
use App\Filament\Resources\EventInMotions\Schemas\EventInMotionForm;
use App\Filament\Resources\EventInMotions\Tables\EventInMotionsTable;
use App\Models\EventInMotion;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class EventInMotionResource extends Resource
{
    protected static ?string $model = EventInMotion::class;

    protected static string|BackedEnum|null $navigationIcon = null;

    protected static ?string $navigationLabel = 'Events In Motion';

    protected static ?string $modelLabel = 'Event In Motion';

    protected static ?string $pluralModelLabel = 'Events In Motion';

    protected static UnitEnum|string|null $navigationGroup = 'Home';

    public static function form(Schema $schema): Schema
    {
        return EventInMotionForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return EventInMotionsTable::configure($table);
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
            'index' => ListEventInMotions::route('/'),
            'create' => CreateEventInMotion::route('/create'),
            'edit' => EditEventInMotion::route('/{record}/edit'),
        ];
    }
}
