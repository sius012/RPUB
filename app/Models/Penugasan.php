<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Tugas;

class Penugasan extends Model
{
    use HasFactory;
    protected $table = "penugasan";
    protected $fillable = ["id_tugas", "id_siswa", "id_penugas", "keterangan", "created_at", "updated_at"];

    public function tugas()
    {
        return $this->hasOne(Tugas::class, "id", "id_tugas");
    }

    public function siswa()
    {
        return $this->hasOne(Siswa::class, "id", "id_siswa");
    }
}
