<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable([
    'title',
    'order',
])]
class AboutFeature extends Model
{
    public $timestamps = false;

    protected function casts(): array
    {
        return [
            'order' => 'integer',
        ];
    }
}
