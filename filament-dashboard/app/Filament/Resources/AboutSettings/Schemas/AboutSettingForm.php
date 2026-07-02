<?php

namespace App\Filament\Resources\AboutSettings\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class AboutSettingForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Section Details')
                    ->schema([
                        Select::make('about_us_id')
                            ->label('Section')
                            ->options([
                                31 => 'Welcome',
                                34 => 'Mission',
                                36 => 'Vision',
                                38 => 'Culture',
                            ])
                            ->required(),
                        TextInput::make('title')
                            ->label('Title')
                            ->required()
                            ->maxLength(255),
                        Textarea::make('description')
                            ->label('Description')
                            ->rows(4),
                        FileUpload::make('hero_image')
                            ->label('Image')
                            ->disk('public')
                            ->directory('about/hero-images')
                            ->image()
                            ->maxSize(5120),
                        TextInput::make('order')
                            ->label('Sort Order')
                            ->numeric()
                            ->default(0),
                        Toggle::make('is_active')
                            ->label('Active')
                            ->default(true),
                    ])
                    ->columns(2),
            ]);
    }
}
