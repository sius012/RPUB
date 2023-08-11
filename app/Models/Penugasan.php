<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Penugasan extends Model
{
    use HasFactory;
    protected $table = "penugasan";
    protected $fillable = ["id_tugas","nis","id_penugas","keterangan","created_at","updated_at"];
}
