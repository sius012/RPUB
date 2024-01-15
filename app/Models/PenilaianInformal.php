<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PenilaianInformal extends Model
{
    use HasFactory;

    protected $table = "penilaian_informal";
    protected $fillable = ["id", "id_penilaian", "id_siswa", "id_penilai", "inisiatif", "antusias", "kejujuran", "kreativitas", "tanggung_jawab", "komunikasi", "kedisiplinan", "etika_sopansantun", "k3"];

    public function penilaian()
    {
        return $this->hasOne(PenilaianProjek::class, "id", "id_penilaian");
    }
}
