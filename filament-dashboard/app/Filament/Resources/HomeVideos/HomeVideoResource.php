<?php

namespace App\Filament\Resources\HomeVideos;

use App\Filament\Resources\HomeVideos\Pages\CreateHomeVideo;
use App\Filament\Resources\HomeVideos\Pages\EditHomeVideo;
use App\Filament\Resources\HomeVideos\Pages\ListHomeVideos;
use App\Filament\Resources\HomeVideos\Schemas\HomeVideoForm;
use App\Filament\Resources\HomeVideos\Tables\HomeVideosTable;
use App\Models\HomeVideo;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class HomeVideoResource extends Resource
{
    protected static ?string $model = HomeVideo::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $navigationLabel = 'Home Videos';

    protected static ?string $modelLabel = 'Home Video';

    protected static ?string $pluralModelLabel = 'Home Videos';

    public static function form(Schema $schema): Schema
    {
        return HomeVideoForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return HomeVideosTable::configure($table);
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
            'index' => ListHomeVideos::route('/'),
            'create' => CreateHomeVideo::route('/create'),
            'edit' => EditHomeVideo::route('/{record}/edit'),
        ];
    }
}
