<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FormPenilaianMagang extends Model
{
    use HasFactory;

    protected $table = "form_penilaian_magang";
    protected $fillable = ["id_dunia_industri","id_template_magang","list_siswa","url","token","expired_form"];

    public function template_magang(){
        return $this->hasOne(TemplateMagang::class,"id","id_template_magang");
    }

    public function siswa(){
        return Siswa::whereIn("id",explode(",",$this->list_siswa))->get();
    }
}
