<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable([
    'title',
    'description',
    'image_path',
    'testimonial_name',
    'testimonial_title',
    'testimonial_description',
    'testimonial_company',
    'testimonial_role',
    'testimonial_company_logo_path',
    'sort_order',
    'is_active',
])]
class CompanyPortfolio extends Model
{
    protected function casts(): array
    {
        return [
            'is_active' => 'boolean',
            'sort_order' => 'integer',
        ];
    }
}
