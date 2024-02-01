<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PenilaianNonFormal extends Model
{
    use HasFactory;

    protected $table = "penilaian_non_formal";
    protected $fillable = ["id", "id_indikator", "id_siswa", "id_penilai", "nilai"];

    public function indikator()
    {
        return $this->hasOne(Tugas::class, "id", "id_indikator");
    }
}
