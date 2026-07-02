<?php

namespace App\Filament\Resources\Projects\Schemas;

use Filament\Forms\Components\ColorPicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class ProjectForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Project details')
                    ->schema([
                        TextInput::make('title')
                            ->label('Title')
                            ->required()
                            ->maxLength(255),
                        Textarea::make('description')
                            ->label('Description')
                            ->rows(4),
                        TextInput::make('client_name')
                            ->label('Client Name')
                            ->maxLength(255),
                        TextInput::make('event_name')
                            ->label('Event Name')
                            ->maxLength(255),
                        ColorPicker::make('card_background_color')
                            ->label('Card Background Color')
                            ->helperText('Optional')
                            ->columnSpanFull(),
                        FileUpload::make('icon_path')
                            ->label('Project Icon')
                            ->disk('public')
                            ->directory('projects/icons')
                            ->image()
                            ->maxSize(5120)
                            ->preserveFilenames(),
                        FileUpload::make('gallery_paths')
                            ->label('Project Gallery')
                            ->disk('public')
                            ->directory('projects/gallery')
                            ->multiple()
                            ->image()
                            ->maxSize(5120)
                            ->reorderable()
                            ->columnSpanFull(),
                    ])
                    ->columns(2),
            ]);
    }
}
