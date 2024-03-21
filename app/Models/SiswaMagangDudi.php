<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SiswaMagangDudi extends Model
{
    use HasFactory;
    protected $table = "siswa_magang_dudi";
    protected $fillable = ["id_kloter_dudi", "id_siswa", "sebagai"];

    public function siswa()
    {
        return $this->hasOne(Siswa::class, "id", "id_siswa");
    }

    public function kloter_dudi(){
        return $this->belongsTo(KloterDudi::class,"id_kloter_dudi","id");
    }
}
