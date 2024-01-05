<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tugas extends Model
{
    use HasFactory;
    protected $table = "tugas";
    protected $fillable = ["nama", "keterangan", "id_projek", "id_parent", "tanggal_awal", "tanggal_akhir", "status", "id_tugas", "created_at", "updated_at", "tipe", "nilai_max"];


    public static function byProjek($id)
    {
        $tugas = Tugas::where("id_projek", $id)->where("id_parent", null)->get();
        $tugasArr = [];
        foreach ($tugas as $i => $tgs) {
            $tugasArr[$i] = Tugas::recursifParse($tgs);
        }
        return $tugasArr;
    }

    public static function findWithChild($id)
    {
        $tugas = Tugas::find($id);
        return Tugas::recursifParse($tugas);
    }

    static function recursifParse($tugas)
    {
        $newTugas = $tugas;
        $newTugasArr = [];
        $children = Tugas::where("id_parent", $tugas->id);


        if ($tugas->tipe == "grup") {
            $childrenWithoutTugas = Tugas::where("id_parent", $tugas->id)->where("tipe", "grup");
            $tugas->tugasStatusArr = implode(":", $childrenWithoutTugas->pluck("status")->toArray()) . (count($childrenWithoutTugas->pluck("status")->toArray()) > 0 ? ":" : "");
            $tugas->tugasCount = $childrenWithoutTugas->get()->count();
            $newTugas->data = "success";
        }


        $newTugas->jenisCount = $children->get()->count();

        if ($children->count() > 0) {
            foreach ($children->get() as $i => $cld) {
                $tgs = Tugas::recursifParse($cld);
                if ($tgs->tipe == "grup") {
                    $newTugas->tugasCount += $tgs->tugasCount;

                    //  printf($newTugas->tugasStatusArr);

                } else {
                }
                if ($i == 0 and count(explode(":", $newTugas->tugasStatusArr)) > 0) {
                    //$newTugas->tugasStatusArr .= ":";
                }
                $newTugas->tugasStatusArr .=  $tgs->tugasStatusArr;

                array_push($newTugasArr, $tgs);
            }
        }

        //CheckChildren
        if ($newTugas->tipe == "grup") {
            if (strlen($newTugas->tugasStatusArr) > 0) {
                $newTugas->statusArr =  array_count_values(explode(":", substr($newTugas->tugasStatusArr, 0, -1)));
            } else {
                $newTugas->statusArr = $newTugas->tugasStatusArr;
            }
        }
        $newTugas->children = $newTugasArr;
        return $newTugas;
    }


    public function penugasan()
    {
        return $this->hasMany(Penugasan::class, "id_tugas", "id");
    }

    public function projek()
    {
        return $this->belongsTo(Projek::class, "id_projek", "id");
    }
}
