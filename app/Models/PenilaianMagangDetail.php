<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PenilaianMagangDetail extends Model
{
    use HasFactory;

    protected $table = "penilaian_magang_detail";
    protected $fillable = ["id_siswa","id_detail_template_magang","id_penilaian_magang","nilai","keterangan"];

    public function template_magang_detail(){
        return $this->hasOne(TemplateMagangDetail::class,"id","id_detail_template_magang");
    }
}
