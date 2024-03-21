<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TemplateMagangDetail extends Model
{
    use HasFactory;
    protected $table = "template_magang_detail";
    protected $fillable = ["nama","nilai_max","aspek","id_template_magang"];
}
