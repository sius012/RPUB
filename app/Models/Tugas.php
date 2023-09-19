<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tugas extends Model
{
    use HasFactory;
    protected $table = "tugas";
    protected $fillable = ["nama","keterangan","id_jenis","id_projek","id_parent","tanggal_awal","tanggal_akhir","status","id_tugas","created_at","updated_at"];


    public static function byProjek($id){
        $tugas = Tugas::where("id_projek",$id)->where("id_parent",null)->with("jenis")->get();
        $tugasArr = [];
        foreach ($tugas as $i=>$tgs){
            $tugasArr[$i]=Tugas::recursifParse($tgs); 
        }
        return $tugasArr;
    }

    public static function findWithChild($id){
        $tugas = Tugas::with("jenis")->find($id);
        return Tugas::recursifParse($tugas);
    }

    static function recursifParse($tugas){
        $newTugas = $tugas;
        $newTugasArr = [];
        $children = Tugas::with("jenis")->where("id_parent",$tugas->id);


        if($tugas->jenis->tipe == "grup"){
            $childrenWithoutTugas = Tugas::with("jenis")->where("id_parent",$tugas->id)->whereHas("jenis", function($q){
                $q->where("tipe","!=","grup");
            });
            $tugas->tugasStatusArr = implode(":",$childrenWithoutTugas->pluck("status")->toArray()).(count($childrenWithoutTugas->pluck("status")->toArray()) > 0 ? ":":""); 
            $tugas->tugasCount = $childrenWithoutTugas->get()->count();
            $newTugas->data = "success";
        }


        $newTugas->jenisCount = $children->get()->count();

        if($children->count()>0){
            foreach($children->get() as $i => $cld){
                $tgs = Tugas::recursifParse($cld);
                if($tgs->jenis->tipe == "grup"){
                $newTugas->tugasCount += $tgs->tugasCount;
                
              //  printf($newTugas->tugasStatusArr);
               
                }else{
                   
                }
                if($i==0 and count(explode(":",$newTugas->tugasStatusArr)) > 0){
                    //$newTugas->tugasStatusArr .= ":";
                }
                $newTugas->tugasStatusArr .=  $tgs->tugasStatusArr;
               
                array_push($newTugasArr, $tgs); 
            }
        }

        //CheckChildren
        if($newTugas->jenis->tipe == "grup"){
            if(strlen($newTugas->tugasStatusArr) > 0){
                $newTugas->statusArr =  array_count_values(explode(":",substr($newTugas->tugasStatusArr,0,-1)));
            }else{
                $newTugas->statusArr = [];
            }
        }
        $newTugas->children = $newTugasArr;
        return $newTugas; 
    }

    public function jenis(){
        return $this->hasOne(Jenis::class, "id","id_jenis");
    }

    public function penugasan(){
        return $this->hasOne(Penugasan::class, "id_tugas", "id");
    }
}