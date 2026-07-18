<?php

namespace App\Filament\Resources\TechSolutionServices;

use App\Filament\Resources\TechSolutionServices\Pages\CreateTechSolutionService;
use App\Filament\Resources\TechSolutionServices\Pages\EditTechSolutionService;
use App\Filament\Resources\TechSolutionServices\Pages\ListTechSolutionServices;
use App\Filament\Resources\TechSolutionServices\Schemas\TechSolutionServiceForm;
use App\Filament\Resources\TechSolutionServices\Tables\TechSolutionServicesTable;
use App\Models\TechSolutionService;
use BackedEnum;
use Filament\Resources\Resource;
use UnitEnum;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class TechSolutionServiceResource extends Resource
{
    protected static ?string $model = TechSolutionService::class;

    protected static string|BackedEnum|null $navigationIcon = null;

    protected static ?string $navigationLabel = 'Tech Solution Services';

    protected static ?string $modelLabel = 'Tech Solution Service';

    protected static ?string $pluralModelLabel = 'Tech Solution Services';

    protected static UnitEnum|string|null $navigationGroup = 'Home';

    public static function form(Schema $schema): Schema
    {
        return TechSolutionServiceForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return TechSolutionServicesTable::configure($table);
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
            'index' => ListTechSolutionServices::route('/'),
            'create' => CreateTechSolutionService::route('/create'),
            'edit' => EditTechSolutionService::route('/{record}/edit'),
        ];
    }
}
