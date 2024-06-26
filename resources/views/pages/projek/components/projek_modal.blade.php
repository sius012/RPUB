<script>

    function toggleNilaiProjek() {

        console.log("toggleNilaiProjek dijalankan"); // Tambahkan ini

        var jenisProjek = document.getElementById("jenisProjek");

        var nilaiProjekInput = document.getElementById("nilaiProjekInput");



        // Tampilkan input nilai projek jika jenis projek adalah "Projek Eksternal"

        if (jenisProjek.value === "Projek Eksternal") {

            nilaiProjekInput.style.display = "block";

        } else {

            nilaiProjekInput.style.display = "none";

        }

    }

</script>



<div class="modal fade" tabindex="-1" aria-hidden="true" id="projek-modal">

    <form action="" method="">

        @csrf

        <div class="modal-dialog show modal-xl" role="document">

            <div class="modal-content">

                <div class="modal-header">

                    <h5 class="modal-title" id="exampleModalLabel1">Tambah Projek</h5>

                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                </div>

                <div class="modal-body">

                    <div class="row">

                        <div class="col">

                            <div class="row">

                                <div class="col mb-3">

                                    <label for="nameBasic" class="form-label">Nama Projek</label>

                                    <input type="text" name="nama" class="form-control" placeholder="Masukkan Nama Projek" required />

                                </div>

                            </div>

                            <div class="row">

                                <div class="col mb-3">

                                    <label for="nameBasic" class="form-label">Tanggal Awal</label>

                                    <input type="date" name="tanggal_awal" class="form-control" placeholder="Masukkan Tanggal" required />

                                </div>

                            </div>

                            <div class="row">

                                <div class="col mb-3">

                                    <label for="nameBasic" class="form-label">Tanggal Akhir</label>

                                    <input type="date" name="tanggal_akhir" class="form-control" placeholder="Masukkan Tanggal" required />

                                </div>

                            </div>

                            <div class="row">

                                <div class="col mb-3">

                                    <label for="jenisProjek" class="form-label">Jenis Projek</label>

                                    <select class="form-select" id="jenisProjek" name="jenis_projek" onchange="toggleNilaiProjek()">

                                        <option value="" selected>Pilih jenis projek...</option>

                                        <option value=" Projek Internal">Projek Internal</option>

                                        <option value="Projek Eksternal">Projek Eksternal</option>

                                    </select>

                                </div>

                            </div>



                            <div class="row" id="nilaiProjekDiv">

                                <div class="col mb-3">

                                    <label for="nilaiProjek" class="form-label">Nilai Projek</label>

                                    <input type="number" id="nilaiProjekInput" name="nilai_projek" class="form-control" placeholder="Masukkan Nominal" required style="display: none;" value="100000" />



                                </div>

                            </div>

                            <div class="row">

                                <div class="col mb-3">

                                    <label for="nameBasic" class="form-label">Klien</label>

                                    <input type="text" name="klien" class="form-control" placeholder="Masukkan Klien" required />

                                </div>

                            </div>



                        </div>

                        <div class="col">





                            <div class="row">

                                <div class="col mb-3">

                                    <label for="nameBasic" class="form-label">Deskripsi</label>

                                    <input type="text" name="deskripsi" class="form-control" placeholder="Masukkan deskripsi projek" required />

                                </div>

                            </div>

                            <div class="row">

                                <div class="col mb-3">

                                    <label for="nameBasic" class="form-label">Lokasi Projek</label>

                                    <input type="text" name="lokasi_projek" class="form-control" placeholder="Masukkan lokasi projek" required />

                                </div>

                            </div>

                            <div class="row">

                                <div class="col mb-3">

                                    <label for="nameBasic" class="form-label">Status</label>

                                    <select name="status" class="form-select" aria-label="Default select example">

                                        <option value="Belum Dimulai">Belum Dimulai</option>

                                        <option value="Siap Dikerjakan">Siap Dikerjakan</option>

                                        <option value="Sedang Dikerjakan">Sedang Dikerjakan</option>

                                        <option value="Revisi">Revisi</option>

                                        <option value="Ditunda">Ditunda</option>

                                        <option value="Ditinjau">Ditinjau</option>

                                        <option value="Selesai">Selesai</option>

                                    </select>

                                </div>

                            </div>

                            <div class="row">

                                <label class="form-label" for="">Kompetensi Keahlian</label>

                                <div class="container-jurusan-row">



                                </div>

                            </div>

                            <div class="row">

                                <div class="col mb-3">

                                    <label for="nameBasic" class="form-label">Penanggung Jawab</label>

                                    <select class="pj-list form-control" name="id_penanggung_jawab"></select>

                                    <div class="container-pj">



                                    </div>

                                </div>

                            </div>

                        </div>



                    </div>

                </div>





                <div class="modal-footer">

                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">

                        Close

                    </button>

                    <button type="submit" class="btn btn-primary" id="">Buat Projek</button>

                </div>

            </div>

        </div>

    </form>

</div>

<!-- Akhir Modal Untuk Tambah Jurusan -->