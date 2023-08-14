<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVersisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('versi', function (Blueprint $table) {
            $table->id();
            $table->bigInteger("id_tugas");
            $table->bigInteger("id_siswa");
            $table->bigInteger("nomor_versi");
            $table->string("nama");
            $table->string("keterangan");
            $table->string("lampiran");
            $table->enum("status",["Belum Dimulai","Proses","Selesai","Revisi","Ditunda"]);
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
        Schema::dropIfExists('versi');
    }
}
