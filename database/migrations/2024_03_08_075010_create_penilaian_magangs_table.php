<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePenilaianMagangsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('penilaian_magang', function (Blueprint $table) {
            $table->id();
            $table->bigInteger("id_siswa");
            $table->bigInteger("id_template_magang");
            $table->string("nama_penilai");
            $table->string("sebagai");
            $table->dateTime("tanggal_pengisian");
            $table->timestamps();
        });

        Schema::create('penilaian_magang_detail', function (Blueprint $table) {
            $table->id();
            $table->bigInteger("id_penilaian_magang");
            $table->bigInteger("id_detail_template_magang");
            $table->string("nilai");
            $table->string("keterangan");
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
        Schema::dropIfExists('penilaian_magangs');
    }
}
