<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJenisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('jenis', function (Blueprint $table) {
        //     $table->id();
        //     $table->string("nama");
        //     $table->text("keterangan");
        //     $table->enum("tipe", ['grup', 'tugas']);
        //     $table->bigInteger("id_jurusan");
        //     $table->string("icon");
        //     $table->timestamps();
        // });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('jenis');
    }
}
