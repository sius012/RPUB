<!-- Modal Untuk Tambah Jurusan -->
<div class="modal fade" id="angkatan-modal" tabindex="-1" aria-hidden="true">
  <form action="" method="">
    @csrf
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel1">Tambah Angkatan</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col mb-3">
              <label for="nameBasic" class="form-label">Angkatan</label>
              <input type="number" name="angkatan" class="form-control" placeholder="Masukkan Angkatan" required />
            </div>
          </div>
          <div class="form-group">
            <div class="col mb-0">
              <label for="emailBasic" class="form-label">Dari</label>
              <input type="date" name="dari" class="form-control" placeholder="Tanggal buat" required>
            </div>
          </div>
          <div class="form-group">
            <div class="col mb-0">
              <label for="emailBasic" class="form-label">Sampai</label>
              <input type="date" name="sampai" class="form-control" placeholder="Date line" required>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <button type="submit" class="btn btn-primary">Buat Angkatan</button>
        </div>
      </div>
    </div>
  </form>
</div>

{{-- /modal tambah angkatan  --}}