<?php

namespace App\Filament\Resources\EventMotionStats\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class EventMotionStatForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('left_value')
                    ->label('Left number')
                    ->numeric()
                    ->default(0)
                    ->required(),
                TextInput::make('left_label')
                    ->label('Left label')
                    ->maxLength(255)
                    ->required(),
                TextInput::make('right_value')
                    ->label('Right number')
                    ->numeric()
                    ->default(0)
                    ->required(),
                TextInput::make('right_label')
                    ->label('Right label')
                    ->maxLength(255)
                    ->required(),
                TextInput::make('sort_order')
                    ->label('Sort order')
                    ->numeric()
                    ->default(0)
                    ->required(),
                Toggle::make('highlight')
                    ->label('Orange right number')
                    ->default(false),
                Toggle::make('is_active')
                    ->label('Active')
                    ->default(true),
            ]);
    }
}
