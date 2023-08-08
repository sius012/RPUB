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
            $table->enum("jk",['L','P']);
            $table->BigInteger("id_angkatan");
            $table->BigInteger("id_jurusan");
            $table->enum("kelas",[1,2,3]);
            $table->string("fotoprofil");
            $table->string("email")->unique();
            $table->string("password");
            

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
