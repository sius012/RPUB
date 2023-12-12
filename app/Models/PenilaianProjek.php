<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PenilaianProjek extends Model
{
    use HasFactory;
    protected $table = "penilaian_projek";
    protected $fillable = ["id_projek", "id_penilai", "id_siswa", "n_nformal", "antusias", "kejujuran", "kreatifitas", "tanggung_jawab", "komunikasi", "etika_sopansantun", "k3", "keterangan	
"];
}
