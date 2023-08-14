<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Siswa extends Model
{
    use HasFactory;
    protected $table = "siswa";
    protected $fillable = ["nis","nama","jk","","id_angkatan","id_jurusan","kelas","fotoprofil","password","email","created_at","updated_at"];
}
