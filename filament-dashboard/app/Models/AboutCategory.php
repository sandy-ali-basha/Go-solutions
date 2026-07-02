<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable([
    'name',
    'order',
])]
class AboutCategory extends Model
{
    public $timestamps = false;

    protected function casts(): array
    {
        return [
            'order' => 'integer',
        ];
    }
}
