<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Siswa extends Authenticatable
{
    use HasFactory;
    protected $table = "siswa";
    protected $fillable = ["nis","nama","jk","","id_angkatan","id_jurusan","kelas","fotoprofil","password","email","created_at","updated_at"];

    public function getRolesName(){
        $jurusan = Jurusan::find($this->id_jurusan);
        return $jurusan;
    }

    public function penugasan(){
        return $this->hasMany(Penugasan::class, "id_siswa","id");
    }
}
