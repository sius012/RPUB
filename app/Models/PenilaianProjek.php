<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PenilaianProjek extends Model
{
    use HasFactory;
    protected $table = "penilaian_projek";
    protected $fillable = ["id_tugas", "id_penilai", "id_siswa"];

    public function siswa()
    {
        return $this->hasOne(Siswa::class, "id", "id_siswa");
    }

    public function penilai()
    {
        return $this->hasOne(User::class, "id", "id_penilai");
    }
    public function tugas()
    {
        return $this->hasOne(Tugas::class, "id", "id_tugas");
    }
    public function penilaian_non_formal()
    {
        return $this->hasMany(PenilaianNonFormal::class, "id_penilaian", "id");
    }
    public function penilaian_informal()
    {
        return $this->hasOne(PenilaianInformal::class, "id_penilaian", "id");
    }
}
