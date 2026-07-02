<?php

namespace App\Filament\Resources\CompanyPortfolios\Pages;

use App\Filament\Resources\CompanyPortfolios\CompanyPortfolioResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditCompanyPortfolio extends EditRecord
{
    protected static string $resource = CompanyPortfolioResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
