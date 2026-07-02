<?php

namespace App\Filament\Resources\EventMotionStats;

use App\Filament\Resources\EventMotionStats\Pages\CreateEventMotionStat;
use App\Filament\Resources\EventMotionStats\Pages\EditEventMotionStat;
use App\Filament\Resources\EventMotionStats\Pages\ListEventMotionStats;
use App\Filament\Resources\EventMotionStats\Schemas\EventMotionStatForm;
use App\Filament\Resources\EventMotionStats\Tables\EventMotionStatsTable;
use App\Models\EventMotionStat;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class EventMotionStatResource extends Resource
{
    protected static ?string $model = EventMotionStat::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $navigationLabel = 'Event Motion Stats';

    protected static ?string $modelLabel = 'Event Motion Stat';

    protected static ?string $pluralModelLabel = 'Event Motion Stats';

    public static function form(Schema $schema): Schema
    {
        return EventMotionStatForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return EventMotionStatsTable::configure($table);
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
            'index' => ListEventMotionStats::route('/'),
            'create' => CreateEventMotionStat::route('/create'),
            'edit' => EditEventMotionStat::route('/{record}/edit'),
        ];
    }
}
