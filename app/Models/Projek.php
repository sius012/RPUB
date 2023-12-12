<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Projek extends Model
{
    use HasFactory;
    protected $table = "projek";
    protected $fillable = ["nama", "tanggal_awal", "tanggal_akhir", "id_penanggung_jawab", "jenis_projek", "klien", "deskripsi", "status", "id_pembuat", "id_jurusan", "created_at", "updated_at"];


    public function nilaiSiswa($id)
    {
        $penilaian_siswa = PenilaianProjek::where("id_siswa", $id)->where("id_projek", $this->id)->get();
        return $penilaian_siswa;
    }
}
