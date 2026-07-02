<?php

namespace App\Filament\Resources\ContactFooterSettings\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class ContactFooterSettingForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Contact details')
                    ->schema([
                        TextInput::make('phone')->label('Phone')->maxLength(255),
                        TextInput::make('email')->label('Email')->email()->maxLength(255),
                        TextInput::make('address')->label('Address')->maxLength(255),
                        TextInput::make('address_url')->label('Address link')->url()->maxLength(255),
                    ])
                    ->columns(2),
                Section::make('Social links')
                    ->schema([
                        TextInput::make('instagram_label')->label('Instagram label')->maxLength(255),
                        TextInput::make('instagram_url')->label('Instagram URL')->url()->maxLength(255),
                        TextInput::make('facebook_url')->label('Facebook URL')->url()->maxLength(255),
                        TextInput::make('linkedin_url')->label('LinkedIn URL')->url()->maxLength(255),
                        TextInput::make('whatsapp')->label('WhatsApp number')->maxLength(255),
                        Toggle::make('is_active')->label('Active')->default(true),
                    ])
                    ->columns(2),
            ]);
    }
}
