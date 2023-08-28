<!-- Modal Untuk Tambah Jurusan -->


<div class="modal fade" id="versi-modal" tabindex="-1" aria-hidden="true">
    <form action="" method="">
        @csrf
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel1">Buat Versi</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col mb-3">
            <input type="hidden" name="id_versi"  class="form-control" placeholder="">
          </div>
        </div>
        <div class="row">
            <div class="col mb-3">
              <input type="hidden" name="id_tugas"  class="form-control" placeholder="">
            </div>
          </div>
          <div class="row">
            <div class="col mb-3">
              <label for="nameBasic" class="form-label">Teruskan Versi</label>
              <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input">
            </div>
          </div>
          <div class="row">
            <div class="col mb-3">
              <label for="nameBasic" class="form-label">Nomor Versi</label>
              <input type="number" name="nomor_versi"  class="form-control" placeholder="masukkan nomor versi">
            </div>
          </div>
          <div class="row">
            <div class="col mb-3">
              <label for="nameBasic" class="form-label">Nama</label>
              <input type="text" name="nama"  class="form-control" placeholder="masukkan nama">
            </div>
          </div>
          <div class="row">
            <div class="col mb-3">
              <label for="nameBasic" class="form-label">Keterangan</label>
              <textarea name="keterangan"  class="form-control" placeholder="tambahkan keterangan"></textarea>
            </div>
          </div>
          <div class="row">
            <div class="col mb-3">
              <label for="nameBasic" class="form-label">Lampiran</label>
              <input type="file" name=""  class="form-control" placeholder="tambahkan lampiran" required>
            </div>
          </div>
          <div class="row">
            <div class="col mb-3">
              <label for="nameBasic" class="form-label">Status</label>
              <select name="status" class="form-select" aria-label="Default select example">
                <option value="Belum Dimulai">Belum Dimulai</option>
                <option value="Siap Dikerjakan">Siap Dikerjakan</option>
                <option value="Dalam Pengerjaan">Dalam Pengerjaan</option>
                <option value="Revisi">Revisi</option>
                <option value="Ditunda">Ditunda</option>
                <option value="Ditinjau">Ditinjau</option>
                <option value="Selesai">Selesai</option>
              </select>
            </div>
          </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Buat</button>
      </div>
    </div>
  </div>
</form>
</div>


