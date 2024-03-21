<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DuniaIndustri extends Model
{
    use HasFactory;
    protected $table = "dunia_industri";
    protected $fillable = ["nama", "alamat", "deskripsi", "alamat", "logo"];

    public function jurusan_dudi()
    {
        return $this->hasMany(JurusanDudi::class, "id_dunia_industri", "id");
    }

    public function template_magang(){
        return $this->hasMany(TemplateMagang::class,"id_dunia_industri","id");
    }
}
