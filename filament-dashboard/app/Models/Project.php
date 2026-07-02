<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable([
    'title',
    'description',
    'client_name',
    'event_name',
    'icon_path',
    'gallery_paths',
    'card_background_color',
    'is_active',
    'sort_order',
])]
class Project extends Model
{
    protected function casts(): array
    {
        return [
            'gallery_paths' => 'array',
            'is_active' => 'boolean',
            'sort_order' => 'integer',
        ];
    }
}
