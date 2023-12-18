<!-- Modal Untuk Tambah Jurusan -->
<div class="modal fade" id="versi-modal" tabindex="-1" aria-hidden="true">
  <form action="" method="" enctype="multipart/form-data">
    @csrf
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel1">Buat Laporan</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col mb-3">
              <label for="nameBasic" class="form-label">Nama</label>
              <input type="text" name="nama" class="form-control" placeholder="masukkan nama">
            </div>
          </div>
          <div class="row">
            <div class="col mb-3">
              <label for="nameBasic" class="form-label">Keterangan</label>
              <textarea name="keterangan" class="form-control" placeholder="tambahkan keterangan"></textarea>
            </div>
          </div>
          <div class="row">
            <div class="col mb-3">
              <label for="nameBasic" class="form-label">Lampiran</label>
              <input type="file" name="lampiran" class="form-control" placeholder="tambahkan lampiran">
            </div>
          </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <button type="submit" class="btn btn-primary">Buat</button>
        </div>
      </div>
    </div>
  </form>
</div>