<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTugasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tugas', function (Blueprint $table) {
            $table->id();
            $table->string("nama");
            $table->text("keterangan");
            $table->bigInteger("id_projek");
            $table->bigInteger("id_parent");
            $table->date("tanggal_awal");
            $table->date("tanggal_akhir");
            $table->enum("status",["Belum Selesai","Sedang Dikerjakan","Selesai","Revisi","Ditunda"]);
            $table->bigInteger("id_kategori");
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
        Schema::dropIfExists('tugas');
    }
}
