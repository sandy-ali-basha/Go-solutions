<?php

namespace App\Filament\Resources\CompanyPortfolios\Pages;

use App\Filament\Resources\CompanyPortfolios\CompanyPortfolioResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListCompanyPortfolios extends ListRecords
{
    protected static string $resource = CompanyPortfolioResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
