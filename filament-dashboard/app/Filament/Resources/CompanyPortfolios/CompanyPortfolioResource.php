<?php

namespace App\Filament\Resources\CompanyPortfolios;

use App\Filament\Resources\CompanyPortfolios\Pages\CreateCompanyPortfolio;
use App\Filament\Resources\CompanyPortfolios\Pages\EditCompanyPortfolio;
use App\Filament\Resources\CompanyPortfolios\Pages\ListCompanyPortfolios;
use App\Filament\Resources\CompanyPortfolios\Schemas\CompanyPortfolioForm;
use App\Filament\Resources\CompanyPortfolios\Tables\CompanyPortfoliosTable;
use App\Models\CompanyPortfolio;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class CompanyPortfolioResource extends Resource
{
    protected static ?string $model = CompanyPortfolio::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $navigationLabel = 'Company Portfolio';

    protected static ?string $modelLabel = 'Company Portfolio';

    protected static ?string $pluralModelLabel = 'Company Portfolio';

    protected static string|\UnitEnum|null $navigationGroup = 'Home';

    public static function form(Schema $schema): Schema
    {
        return CompanyPortfolioForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return CompanyPortfoliosTable::configure($table);
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
            'index' => ListCompanyPortfolios::route('/'),
            'create' => CreateCompanyPortfolio::route('/create'),
            'edit' => EditCompanyPortfolio::route('/{record}/edit'),
        ];
    }
}
