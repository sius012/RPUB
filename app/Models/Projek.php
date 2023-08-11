<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Projek extends Model
{
    use HasFactory;
    protected $table = "projek";
    protected $fillable = ["nama","tanggal_awal","tanggal_akhir","penanggung_jawab","jenis_projek","klien","deskripsi","status","created_at","updated_at"];
}
