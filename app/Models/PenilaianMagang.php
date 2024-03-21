<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PenilaianMagang extends Model
{
    use HasFactory;

    protected $table = "penilaian_magang";

    protected $fillable = ["id_siswa","id_template_magang","nama_penilai","sebagai","tanggal_pengisian"];

    public function penilaian_magang_detail(){
        return $this->hasMany(PenilaianMagangDetail::class,"id_penilaian_magang","id");
    }

    public function penilaian_magang_informal(){
        return $this->hasOne(PenilaianMagangInformal::class, "id_penilaian_magang","id");
    }

    public function siswa(){
        return $this->hasOne(Siswa::class, "id","id_siswa");
    }

    public function template_magang(){
        return $this->hasOne(TemplateMagang::class,"id","id_template_magang");
    }

    protected static function booted () {
        static::deleting(function(PenilaianMagang $penilaian) { // before delete() method call this
             $penilaian->penilaian_magang_detail()->delete();
             $penilaian->penilaian_magang_informal()->delete();
        });
    }
}
