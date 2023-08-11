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
            $table->string("penanggung_jawab");
            $table->string("jenis_projek");
            $table->string("klien");
            $table->text("deskripsi");
            $table->enum("status",["Belum Selesai","Sedang Dikerjakan","Selesai","Revisi","Ditunda"]);
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
