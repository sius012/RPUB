<?php

use App\Models\Tugas;
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
            $table->bigInteger("id_parent")->nullable();
            $table->date("tanggal_awal")->nullable();
            $table->date("tanggal_akhir")->nullable();
            $table->enum('status', ['Belum Dimulai', 'Siap Dikerjakan', 'Dalam Pengerjaan', 'Revisi', 'Ditunda', 'Ditinjau', 'Selesai']);
            //$table->bigInteger("id_jenis");
            $table->enum("tipe", ["indikator", "tugas"])->default("tugas");
            $table->integer("nilai_max")->nullable();
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
