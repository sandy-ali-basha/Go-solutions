<?php

namespace App\Filament\Resources\HomeVideos\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class HomeVideoForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->label('Title')
                    ->maxLength(255),
                FileUpload::make('video_path')
                    ->label('Home video')
                    ->disk('public')
                    ->directory('home-videos')
                    ->acceptedFileTypes(['video/mp4', 'video/webm', 'video/ogg'])
                    ->maxSize(102400)
                    ->required(),
                FileUpload::make('poster_path')
                    ->label('Poster image')
                    ->disk('public')
                    ->directory('home-videos/posters')
                    ->image()
                    ->maxSize(5120),
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
