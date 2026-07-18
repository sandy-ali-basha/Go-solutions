<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable([
    'first_name',
    'email',
    'phone',
    'company_name',
    'client_type',
    'country_code',
    'budget_range',
    'message',
])]
class ContactMessage extends Model
{
    // No additional configuration is needed.
}
