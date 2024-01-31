<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jurusan extends Model
{
    use HasFactory;
    protected $table = "jurusan";
    protected $fillable = ["jurusan", "keterangan", "created_at", "updated_at"];

    public function ub_jurusan()
    {
        return $this->hasMany(UBJurusan::class, "id_jurusan", "id");
    }
    public function projekJurusan()
    {
        return $this->hasMany(ProjekJurusan::class, "id_jurusan", "id");
    }
}
