<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFormPenilaianMagangsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('form_penilaian_magang', function (Blueprint $table) {
            $table->id();
            $table->bigInteger("id_dunia_industri");
            $table->bigInteger("id_template_magang");
            $table->string("list_siswa");
            $table->text("url");
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
        Schema::dropIfExists('form_penilaian_magangs');
    }
}
