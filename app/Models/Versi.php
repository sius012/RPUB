<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Versi extends Model
{
    use HasFactory;
    protected $table = "versi";
    protected $fillable = ["id_tugas", "id_siswa", "nomor_versi", "nama", "lampiran", "status", "created_at", "updated_at"];

    public function tugas()
    {
        return $this->belongsTo(Tugas::class, "id_tugas", "id");
    }

    public function siswa()
    {
        return $this->hasOne(Siswa::class, "id", "id_siswa");
    }
}
