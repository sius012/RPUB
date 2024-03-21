<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKloterDudisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kloter_dudi', function (Blueprint $table) {
            $table->id();
            $table->bigInteger("id_dunia_industri");
            $table->text("nama");
            $table->date("tanggal_mulai");
            $table->date("tanggal_selesai");
            $table->timestamps();
        });

        Schema::create('siswa_magang_dudi', function (Blueprint $table) {
            $table->id();
            $table->bigInteger("id_kloter_dudi");
            $table->text("id_siswa");
            $table->text("sebagai")->nullable();
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
        Schema::dropIfExists('kloter_dudis');
    }
}
