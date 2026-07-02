<?php

namespace App\Filament\Resources\CompanyPortfolios\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class CompanyPortfolioForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Portfolio')
                    ->schema([
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
                            ->directory('company-portfolios')
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
                    ])
                    ->columns(2),
                Section::make('Testimonial')
                    ->schema([
                        TextInput::make('testimonial_name')
                            ->label('Name')
                            ->maxLength(255),
                        TextInput::make('testimonial_title')
                            ->label('Title')
                            ->maxLength(255),
                        Textarea::make('testimonial_description')
                            ->label('Description')
                            ->rows(4)
                            ->columnSpanFull(),
                        TextInput::make('testimonial_company')
                            ->label('Company')
                            ->maxLength(255),
                        TextInput::make('testimonial_role')
                            ->label('Role')
                            ->maxLength(255),
                        FileUpload::make('testimonial_company_logo_path')
                            ->label('Company logo')
                            ->disk('public')
                            ->directory('company-portfolios/company-logos')
                            ->image()
                            ->maxSize(5120),
                    ])
                    ->columns(2),
            ]);
    }
}
