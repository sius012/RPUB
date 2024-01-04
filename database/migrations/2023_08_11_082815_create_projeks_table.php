<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjeksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projek', function (Blueprint $table) {
            $table->id();
            $table->string("nama");
            $table->date("tanggal_awal");
            $table->date("tanggal_akhir");
            $table->bigInteger("id_penanggung_jawab");
            $table->string("jenis_projek");
            $table->string("klien")->nullable();
            $table->integer("nominal")->nullable();
            $table->text("deskripsi");
            $table->enum("status", ["Belum Dimulai", "Siap Dikerjakan", "Sedang Dikerjakan", "Selesai", "Revisi", "Ditunda"]);
            $table->bigInteger("id_pembuat");
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
        Schema::dropIfExists('projek');
    }
}
