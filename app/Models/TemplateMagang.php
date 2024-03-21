<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TemplateMagang extends Model
{
    use HasFactory;

    protected $table = "template_magang";
    protected $fillable = ["nama","deskripsi","id_dunia_industri"];

    public function template_magang_detail(){
        return $this->hasMany(TemplateMagangDetail::class,"id_template_magang","id");
    }

    public function penilaian_magang(){
        return $this->hasMany(PenilaianMagang::class,"id_template_magang","id");
    }

    public function form_penilaian_magang(){
        return $this->hasMany(FormPenilaianMagang::class,"id_template_magang","id");
    }
}
