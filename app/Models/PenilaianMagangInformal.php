<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PenilaianMagangInformal extends Model
{
    use HasFactory;

    protected $table = "penilaian_magang_informal";
    protected $fillable = ["id_penilaian_magang","inisiatif","antusias","kejujuran","kreativitas","tanggung_jawab","komunikasi","kedisiplinan","etika_sopansantun","k3","keterangan"];
    
}
