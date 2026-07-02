<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable([
    'phone',
    'email',
    'instagram_label',
    'instagram_url',
    'facebook_url',
    'linkedin_url',
    'whatsapp',
    'address',
    'address_url',
    'is_active',
])]
class ContactFooterSetting extends Model
{
    protected function casts(): array
    {
        return [
            'is_active' => 'boolean',
        ];
    }
}
