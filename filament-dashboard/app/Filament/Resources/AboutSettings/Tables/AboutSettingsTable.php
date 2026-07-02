<?php

namespace App\Filament\Resources\AboutSettings\Tables;

use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\BooleanColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class AboutSettingsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('about_us_id')
                    ->label('Section')
                    ->sortable()
                    ->formatStateUsing(fn (?int $state) => match ($state) {
                        31 => 'Welcome',
                        34 => 'Mission',
                        36 => 'Vision',
                        38 => 'Culture',
                        default => (string) $state,
                    }),
                TextColumn::make('title')
                    ->label('Title')
                    ->searchable()
                    ->sortable(),
                BooleanColumn::make('is_active')
                    ->label('Active')
                    ->sortable(),
                TextColumn::make('order')
                    ->label('Sort Order')
                    ->sortable(),
            ])
            ->recordActions([
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->bulkActions([
                DeleteBulkAction::make(),
            ]);
    }
}
