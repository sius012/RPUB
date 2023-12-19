<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Angkatan extends Model
{
    use HasFactory;
    protected $table = "angkatan";
    protected $fillable = ["id_angkatan", "keterangan", "created_at", "updated_at"];

    public static function getClass()
    {
        return Angkatan::where("dari", "<", date("Y-m-d"))->where("sampai", ">", date("Y-m-d"))->get();
    }


    public function kelas()
    {
        $angkatan = Angkatan::where("id_angkatan", $this->id_angkatan)->first();
        $jarak = abs(strtotime($angkatan->dari) - strtotime(date("Y-m-d")));
        $tahun = floor($jarak / (365 * 60 * 60 * 24));
        $kelas = $tahun + 10;
        if ($kelas <= 12) {
            return $kelas;
        } else {
            return "Lulusan";
        }
    }
}
