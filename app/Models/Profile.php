<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    protected $table = 'profiles';
    protected $primaryKey = 'id';
    protected $fillable = [
        'user_id', 
        'gender', 
        'phone', 
        'date_of_birth', 
        'address', 
        'photo',
        'twitter',
        'facebook',
        'linkedin',
        'youtube',
        'status'
    ];
}
