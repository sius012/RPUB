<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JurusanDudi extends Model
{
    use HasFactory;

    protected $table = "jurusan_dudi";
    protected $fillable = ["id_dunia_industri", "id_jurusan"];

    public function jurusan()
    {
        return $this->hasOne(Jurusan::class, "id", "id_jurusan");
    }
}
