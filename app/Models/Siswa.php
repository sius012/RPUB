<?php



namespace App\Models;



use Illuminate\Foundation\Auth\User as Authenticatable;

use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Model;



class Siswa extends Authenticatable

{

    use HasFactory;

    protected $table = "siswa";

    protected $fillable = ["nis", "nama", "jk", "", "id_angkatan", "id_jurusan", "kelas", "fotoprofil", "password", "email", "created_at", "updated_at"];



    public function getRolesName()

    {

        $jurusan = Jurusan::find($this->id_jurusan);

        return $jurusan;

    }



    public function penugasan()

    {

        return $this->hasMany(Penugasan::class, "id_siswa", "id");

    }



    public function angkatan()

    {

        return $this->hasOne(Angkatan::class, "id", "id_angkatan");

    }



    public function jurusan()

    {

        return $this->hasOne(Jurusan::class, "id", "id_jurusan");

    }

    public function siswa_magang_dudi(){
        return $this->hasMany(SiswaMagangDudi::class,"id_siswa","id");
    }
}

