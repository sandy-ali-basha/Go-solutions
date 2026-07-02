<?php

namespace App\Filament\Resources\Projects\Tables;

use Filament\Actions\DeleteBulkAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class ProjectsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')
                    ->label('Title')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('client_name')
                    ->label('Client Name')
                    ->searchable(),
                TextColumn::make('event_name')
                    ->label('Event Name')
                    ->searchable(),
                ImageColumn::make('icon_path')
                    ->label('Icon')
                    ->disk('public')
                    ->circular(),
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
