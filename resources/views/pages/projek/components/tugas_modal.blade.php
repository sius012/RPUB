<!-- Modal Untuk Tambah tugas -->
<div class="modal fade" id="tugas-modal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel1">Tambah Projek</h5>
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
              <label for="nameBasic" class="form-label">id_tugas</label>
              <input type="hidden" name="id_tugas" class="form-control" placeholder="tambahkan id tugas" />
            </div>
          </div>
          <div class="row">
            <div class="col mb-3">
              <label for="nameBasic" class="form-label">id_parent</label>
              <input type="hidden" name="id_parent" class="form-control" placeholder="tambahkan id parent" />
            </div>
          </div>
          <div class="row">
            <div class="col mb-3">
              <label for="nameBasic" class="form-label">id_projek</label>
              <input type="hidden" name="id_projek" class="form-control" placeholder="tambahkan id projek" />
            </div>
          </div>
          <div class="row">
            <div class="col mb-3">
              <label for="nameBasic" class="form-label">Nama Tugas</label>
              <input type="text" name="nama" class="form-control" placeholder="Masukkan Nama Tugas" />
            </div>
          </div>
          <div class="row">
            <div class="col mb-3">
              <label for="nameBasic" class="form-label">Keterangan</label>
              <textarea name="keterangan" class="form-control" placeholder="tambahkan keterangan" />
            </div>
          </div>
          <div class="row">
            <div class="col mb-3">
              <label for="nameBasic" class="form-label">Tanggal Awal</label>
              <input type="date" name="tanggal_awal" class="form-control" placeholder="Masukkan Tanggal" />
            </div>
          </div>
          <div class="row">
            <div class="col mb-3">
              <label for="nameBasic" class="form-label">Tanggal Akhir</label>
              <input type="date" name="tanggal_akhir" class="form-control" placeholder="Masukkan Tanggal" />
            </div>
          </div>
          <div class="row">
            <div class="col mb-3">
              <label for="nameBasic" class="form-label">Jenis</label>
              <select name="id_jenis">
                <option value=""></option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col mb-3">
              <label for="nameBasic" class="form-label">Status</label>

              <select name="status">
                <option value="">/option>
              </select>

            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary" id="clear-jurusan">Buat Tugas</button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<!-- Akhir Modal Untuk Tambah Jurusan -->

