<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Versi extends Model
{
    use HasFactory;
    protected $table = "versi";
    protected $fillable = ["id_tugas","id_nis","nomor_versi","nama","keterangan","lampiran","status","created_at","updated_at"];
}
