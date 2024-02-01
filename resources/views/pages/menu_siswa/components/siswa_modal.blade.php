<!-- Modal Untuk Tambah Jurusan -->
<div class="modal fade" id="jurusan-modal" tabindex="-1" aria-hidden="true">
<form action="" method="">
    @csrf
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel1">Tambah Jurusan</h5>
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
            <label for="nameBasic" class="form-label">NIS</label>
            <input type="text" name="nis"  class="form-control" placeholder="Masukkan nis" required >
          </div>
        </div>
        <div class="row">
            <div class="col mb-3">
              <label for="nameBasic" class="form-label">Nama</label>
              <input type="text" name="nama"  class="form-control" placeholder="Masukkan nama" required >
            </div>
          </div>
          <div class="row">
            <div class="col mb-3">
              <label for="nameBasic" class="form-label">Jenis Kelamin</label>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="jk" id="" value="laki-laki">
                <label class="form-check-label" for="flexRadioDefault1" >
                  Laki-laki
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="jk" id="" value="perempuan">
                <label class="form-check-label" for="flexRadioDefault2">
                  Perempuan
                </label>
              </div>
            </div>
          </div>
          <input type="hidden" name="id_angkatan" class="form-control" placeholder="tambahkan id tugas" />
          <input type="hidden" name="id_jurusan" class="form-control" placeholder="tambahkan id parent"/>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
          Close
        </button>
        <button type="submit" class="btn btn-primary">siswa</button>
      </div>
    </div>
  </div>
</form>
</div>

{{--  /modal tambah jurusan  --}}


