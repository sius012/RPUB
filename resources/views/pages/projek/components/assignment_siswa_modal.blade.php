<!-- Modal Untuk Tambah Jurusan -->
<div class="modal fade" id="assignment-siswa-modal" tabindex="-1" aria-hidden="true">
    <form action="" method="">
        <div class="modal-dialog" role="document">

            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel1">Cari Siswa</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container-kelas">

                    </div>


                    <div class="form-check form-switch mt-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" name='pilih_semua'>
                        <label class="form-check-label" for="flexSwitchCheckChecked">Pilih semua</label>
                    </div>
                    <div class="row">
                        <div class="col mb-3">
                            <label for="nameBasic" class="form-label">Nama Siswa</label>
                            <input type="text" name="nama" class="form-control input-siswa" placeholder="Masukkan Nama Siswa" />
                        </div>
                    </div>
                    <div class="siswa-container"></div>
                    <div class="demo-inline-spacing mt-3 siswa-list-container">
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                            Close
                        </button>
                        <button type="submit" class="btn btn-outline-primary">
                            Perbarui Partisipan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>