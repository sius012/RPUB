
    <div class="button">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#assignment-siswa-modal"
            id="tambah-jurusan">
            Tambah Data Siswa
        </button>
    </div>
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
                        <div class="row">
                            <div class="col mb-3">
                                <label for="nameBasic" class="form-label">Nama Siswa</label>
                                <input type="text" name="nama" class="form-control input-siswa"
                                    placeholder="Masukkan Nama Siswa" />
                            </div>
                        </div>
                        <div class="siswa-container"></div>
                        <div class="demo-inline-spacing mt-3 siswa-list-container">
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button type="submit" class="btn btn-outline-primary" >
                               Tambah Partisipan
                            </button>
                        </div>
                    </div>
                </div>
        </form>
    </div>
