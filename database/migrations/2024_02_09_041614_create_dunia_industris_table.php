<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDuniaIndustrisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dunia_industri', function (Blueprint $table) {
            $table->id();
            $table->string("nama");
            $table->string("deskripsi");
            $table->text("alamat");
            $table->text("logo");
            $table->timestamps();
        });

        Schema::create('jurusan_dudi', function (Blueprint $table) {
            $table->id();
            $table->bigInteger("id_jurusan");
            $table->bigInteger("id_dunia_industri");
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
        Schema::dropIfExists('dunia_industris');
    }
}
