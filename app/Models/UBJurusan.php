<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UBJurusan extends Model
{
    use HasFactory;
    protected $table = "ub_jurusan";
    protected $fillable = ["id_pengguna", "id_jurusan"];

    public function jurusan()
    {
        return $this->hasOne(Jurusan::class, "id", "id_jurusan");
    }
}
