<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTemplateMagangsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('template_magang', function (Blueprint $table) {
            $table->id();
            $table->bigInteger("id_dunia_industri");
            $table->string("nama");
            $table->text("deskripsi");
            $table->enum("status",["Aktif","Belum Dipublish","Nonaktif"])->default("Belum Dipublish");
            $table->timestamps();
        });

        Schema::create('template_magang_detail', function (Blueprint $table) {
            $table->id();
            $table->bigInteger("id_template_magang");
            $table->string("nama");
            $table->text("nilai_max");
            $table->text("aspek");
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
        Schema::dropIfExists('template_magangs');
    }
}
