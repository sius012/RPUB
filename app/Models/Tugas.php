<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tugas extends Model
{
    use HasFactory; 

    protected $fillable = 
    ['name',
     'keterangan',
     'id_project',
     'id_parent',
     'tanggal_awal',
     'tanggal_akhir',
     ' status',
     'id_kategori'
    ];
}
