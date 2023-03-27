<?php

namespace App\Models\Partner;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Partner extends Model
{
    protected $fillable = [
        'user_id', 
        'gender', 
        'phone', 
        'date_of_birth', 
        'address', 
        'country', 
        'city', 
        'profile',
        'status'
    ];
}
