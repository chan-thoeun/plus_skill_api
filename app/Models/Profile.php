<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Profile extends Model
{
    protected $table      = 'profiles';
    protected $primaryKey = 'id';
    protected $fillable = [
        'user_id', 
        'gender', 
        'phone', 
        'dob', 
        'address', 
        'image',
        'twitter',
        'facebook',
        'linkedin',
        'youtube',
        'status'
    ];
    public function user() 
    { 
        return $this->belongsTo(User::class); 
    }
}
