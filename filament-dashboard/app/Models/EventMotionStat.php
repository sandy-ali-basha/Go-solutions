<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable([
    'left_value',
    'left_label',
    'right_value',
    'right_label',
    'highlight',
    'sort_order',
    'is_active',
])]
class EventMotionStat extends Model
{
    protected function casts(): array
    {
        return [
            'left_value' => 'integer',
            'right_value' => 'integer',
            'highlight' => 'boolean',
            'sort_order' => 'integer',
            'is_active' => 'boolean',
        ];
    }
}
