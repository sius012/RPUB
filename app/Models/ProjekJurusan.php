<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjekJurusan extends Model
{
    use HasFactory;
    protected $table = "projek_jurusan";
    protected $fillable = ["id_projek", "id_jurusan"];
}
