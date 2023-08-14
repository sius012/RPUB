<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tugas extends Model
{
    use HasFactory;
    protected $table = "tugas";
    protected $fillable = ["nama","keterangan","id_projek","id_parent","","tanggal_awal","tanggal_akhir","status","id_kategori","created_at","updated_at"];


    public static function byProjek($id){
        $tugas = Tugas::where("id_projek",$id)->where("id_parent",null)->get();
        $tugasArr = [];
        foreach ($tugas as $i=>$tgs){
            $tugasArr[$i]=Tugas::recursifParse($tgs); 
        }
        return $tugasArr;
    }

    static function recursifParse($tugas){
        $newTugas = $tugas;
        $newTugasArr = [];
        $children = Tugas::where("id_parent",$tugas->id);
        if($children->count()>0){
            foreach($children->get() as $cld){
                array_push($newTugasArr, Tugas::recursifParse($cld));
            }
        }
        $newTugas->children = $newTugasArr;
        return $newTugas; 
    }
}