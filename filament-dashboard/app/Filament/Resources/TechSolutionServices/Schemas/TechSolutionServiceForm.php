<?php

namespace App\Filament\Resources\TechSolutionServices\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class TechSolutionServiceForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->label('Title')
                    ->maxLength(255)
                    ->required(),
                Textarea::make('description')
                    ->label('Description')
                    ->rows(4),
                FileUpload::make('image_path')
                    ->label('Image')
                    ->disk('public')
                    ->directory('tech-solution-services')
                    ->image()
                    ->maxSize(5120)
                    ->required(),
                TextInput::make('sort_order')
                    ->label('Sort order')
                    ->numeric()
                    ->default(0)
                    ->required(),
                Toggle::make('is_active')
                    ->label('Active')
                    ->default(true),
            ]);
    }
}
