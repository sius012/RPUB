<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jenis extends Model
{
    use HasFactory;
    protected $table = "jenis";
    protected $fillable = ["nama", "kategori", "id_jurusan", "icon", "created_at", "updated_at"];

    public function jurusan()
    {
        return $this->hasOne(Jurusan::class, "id", "id_jurusan");
    }
}
