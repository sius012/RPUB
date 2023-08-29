<!-- Modal Untuk Tambah tugas -->
<div class="modal fade" id="tugas-modal" tabindex="-1" aria-hidden="true">
    <form action="" method="">
        @csrf
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel1">Tambah Tugas</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
              <input type="hidden" name="id_tugas" class="form-control" placeholder="tambahkan id tugas" />
              <input type="hidden" name="id_parent" class="form-control" placeholder="tambahkan id parent"/>
              <input type="hidden" name="id_projek" class="form-control" placeholder="tambahkan id projek"/>
          <div class="row">
            <div class="col mb-3">
              <label for="nameBasic" class="form-label">Nama Tugas</label>
              <input type="text" name="nama" class="form-control" placeholder="Masukkan Nama Tugas" required/>
            </div>
          </div>
          <div class="row">
            <div class="col mb-3">
              <label for="nameBasic" class="form-label">Keterangan</label>
              <textarea name="keterangan" class="form-control" placeholder="tambahkan keterangan" required></textarea>
            </div>
          </div>
          <div class="row">
            <div class="col mb-3">
              <label for="nameBasic" class="form-label">Tanggal Awal</label>
              <input type="date" name="tanggal_awal" class="form-control" placeholder="Masukkan Tanggal" required>
            </div>
          </div>
          <div class="row">
            <div class="col mb-3">
              <label for="nameBasic" class="form-label">Tanggal Akhir</label>
              <input type="date" name="tanggal_akhir" class="form-control" placeholder="Masukkan Tanggal" required>
            </div>
          </div>
          <div class="row">
            <div class="col mb-3">
              <label for="nameBasic" class="form-label">Jenis</label>
              <select name="id_jenis" class="form-select" aria-label="Default select example">
                <option value=""></option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col mb-3">
              <label for="nameBasic" class="form-label">Status</label>

              <select name="status" class="form-select" aria-label="Default select example">
                <option value="">Pilih Status</option>
                <option value="Belum Dimulai" >Belum Dimulai</option>
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
          <button type="submit" class="btn btn-primary" id="clear-jurusan">Buat Tugas</button>
        </div>
      </div>
    </div>
</form>
  </div>
<!-- Akhir Modal Untuk Tambah Jurusan -->

