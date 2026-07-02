<?php

namespace App\Filament\Resources\Certifications\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class CertificationForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Certification Details')
                    ->schema([
                        TextInput::make('title')
                            ->label('Title')
                            ->required()
                            ->maxLength(255),
                        TextInput::make('subtitle')
                            ->label('Subtitle')
                            ->maxLength(255),
                        FileUpload::make('image')
                            ->label('Image')
                            ->disk('public')
                            ->directory('about/certifications')
                            ->image()
                            ->maxSize(5120),
                        TextInput::make('order')
                            ->label('Sort Order')
                            ->numeric()
                            ->default(0),
                    ])
                    ->columns(2),
            ]);
    }
}
