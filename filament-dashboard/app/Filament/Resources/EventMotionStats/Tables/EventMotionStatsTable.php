<?php

namespace App\Filament\Resources\EventMotionStats\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ToggleColumn;
use Filament\Tables\Table;

class EventMotionStatsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('left_value')->label('Left')->sortable(),
                TextColumn::make('left_label')->label('Left label')->searchable(),
                TextColumn::make('right_value')->label('Right')->sortable(),
                TextColumn::make('right_label')->label('Right label')->searchable(),
                TextColumn::make('sort_order')->label('Order')->sortable(),
                ToggleColumn::make('highlight')->label('Highlight'),
                ToggleColumn::make('is_active')->label('Active'),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
