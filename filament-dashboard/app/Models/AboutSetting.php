<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable([
    'about_us_id',
    'title',
    'description',
    'hero_image',
    'order',
    'is_active',
])]
class AboutSetting extends Model
{
    protected function casts(): array
    {
        return [
            'about_us_id' => 'integer',
            'order' => 'integer',
            'is_active' => 'boolean',
        ];
    }
}
