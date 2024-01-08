<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;
    protected $table      = 'transactions';
    protected $primarykey = 'id';

    protected $fillable = [
        'owner_address',
        'transaction_hash',
        'from',
        'to',
        'token_value',
        'gas_price',
        'type',
        'status'
    ];
}
