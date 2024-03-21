<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePenilaianMagangInformalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('penilaian_magang_informal', function (Blueprint $table) {
            $table->id();
            $table->bigInteger("id_penilaian_magang");
            $table->integer("inisiatif");
            $table->integer("antusias");
            $table->integer("kejujuran");
            $table->integer("kreativitas");
            $table->integer("tanggung_jawab");
            $table->integer("komunikasi");
            $table->integer("kedisiplinan");
            $table->integer("etika_sopansantun");
            $table->integer("k3");
            $table->text("keterangan");
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
        Schema::dropIfExists('penilaian_magang_informals');
    }
}
