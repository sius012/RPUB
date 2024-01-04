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
            $table->string("nama");
            $table->string("keterangan");
            $table->string("lampiran")->nullable();
            $table->enum('status', ['Belum dimulai', 'Siap dikerjakan', 'Dalam Pengerjaan', 'Revisi', 'Ditunda', 'Ditinjau', 'Selesai']);
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
