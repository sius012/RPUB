<!-- Modal Untuk Tambah Jurusan -->
<div class="modal fade" id="jenis-modal" tabindex="-1" aria-hidden="true">
    <form action="" method="" enctype="multipart/form-data">
        @csrf
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel1">Tambah Kategori</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col mb-3">
                            <label for="nameBasic" class="form-label">Nama Kategori</label>
                            <input type="text" name="nama" class="form-control" placeholder="Masukkan nama kategori" required />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col mb-3">
                            <label for="nameBasic" class="form-label">Keterangan</label>
                            <input type="text" name="keterangan" class="form-control" placeholder="Masukkan nama kategori" required />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col mb-3">
                            <label for="nameBasic" class="form-label">Jurusan</label>
                            <select name="jurusan" class="form-select" aria-label="Default select example">
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col mb-3">
                            <label for="nameBasic" class="form-label">Tipe</label>
                            <select name="tipe" class="form-select" aria-label="Default select example" required>
                                <option value="grup">Grup</option>
                                <option value="tugas">Tugas</option>
                            </select>
                        </div>
                    </div>
                    <div class="row g-2">
                        <div class="col mb-0">
                            <label for="emailBasic" class="form-label">Icon</label>
                            <input type="file" name="icon" class="form-control" placeholder="Masukkan icon" required />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                            Close
                        </button>
                        <button type="submit" class="btn btn-primary">Buat Jenis Tugas</button>
                    </div>
                </div>
            </div>
    </form>
</div>

{{-- /modal tambah jenis  --}}