<!-- Modal Untuk Tambah Jurusan -->
<div class="modal fade" id="modal-jurusan" tabindex="-1" aria-hidden="true">
    <form action="" method="">
        @csrf
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel1">Tambah Kompetensi Keahlian</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col mb-3">
                            <label for="nameBasic" class="form-label">Kompetensi Keahlian</label>
                            <input type="number" name="jurusan" class="form-control" placeholder="Masukkan kompetensi keahlian" required />
                        </div>
                    </div>
                    <div class="row g-2">
                        <div class="col mb-0">
                            <label for="emailBasic" class="form-label">Keterangan</label>
                            <input type="date" name="keterangan" class="form-control" placeholder="Masukkan Keterangan" required />
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
                    <button type="submit" class="btn btn-primary">Buat Jurusan</button>
                </div>
            </div>
        </div>
    </form>
</div>

{{--  /modal tambah jurusan  --}}
