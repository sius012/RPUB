<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tugas extends Model
{
    use HasFactory;
    protected $table = "tugas";
    protected $fillable = ["nama","keterangan","id_projek","id_parent","","tanggal_awal","tanggal_akhir","status","id_kategori","created_at","updated_at"];
}
