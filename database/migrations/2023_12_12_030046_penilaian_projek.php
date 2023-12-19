<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class PenilaianProjek extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('penilaian_projek', function (Blueprint $table) {
            $table->id();
            $table->bigInteger("id_projek");
            $table->bigInteger("id_penilai");
            $table->bigInteger("id_siswa");
            $table->integer("n_nformal");
            $table->char("antusias");
            $table->char("kejujuran");
            $table->char("kreativitas");
            $table->char("tanggung_jawab");
            $table->char("komunikasi");
            $table->char("etika_sopansantun");
            $table->char("k3");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
