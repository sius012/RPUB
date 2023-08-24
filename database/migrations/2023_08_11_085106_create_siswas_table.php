<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSiswasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('siswa', function (Blueprint $table) {
            $table->id();
            $table->string("nis")->unique();
            $table->string("nama");
            $table->enum("jk",["Laki-laki","Perempuan"]);
            $table->bigInteger("id_angkatan");
            $table->bigInteger("id_jurusan");
            $table->enum("kelas",["1","2","3"]);
            $table->string("fotoprofil");
            $table->string("password", 60)->change();
            $table->string("email")->unique();
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
        Schema::dropIfExists('siswa');
    }
}
