<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PenilaianInformal extends Model
{
    use HasFactory;

    protected $table = "penilaian_informal";
    protected $fillable = ["id", "id_tugas", "id_siswa", "id_penilai", "inisiatif", "antusias", "kejujuran", "kreativitas", "tanggung_jawab", "komunikasi", "kedisiplinan", "etika_sopansantun", "k3"];
}
