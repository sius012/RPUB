<div class="modal" tabindex="-1" id="penilaian-projek-modal">
  <form action="" method="post">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Penilaian Projek</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">

          <div class="form-group">
            <input name="id_projek" type="hidden">
            <input name="id_penilai" type="hidden">
            <input name="id_siswa" type="hidden">
          </div>
          <div class="form-group">
            <label for="" class="form-label">Nilai Non-formal</label>
            <input type="number" class="form-control" name="n_nformal">
          </div>

          <table class="table">
            <tr>
              <td>Antusias</td>
              <td><input type="text" class="form-control" name="antusias"></td>
            </tr>
            <tr>
              <td>Kejujuran</td>
              <td><input type="text" class="form-control" name="kejujuran"></td>
            </tr>
            <tr>
              <td>Kreativitas</td>
              <td><input type="text" class="form-control" name="kreativitas"></td>
            </tr>
            <tr>
              <td>Tanggung Jawab</td>
              <td><input type="text" class="form-control" name="tanggung_jawab"></td>
            </tr>
            <tr>
              <td>Komunikasi</td>
              <td><input type="text" class="form-control" name="komunikasi"></td>
            </tr>
            <tr>
              <td>Etika & Sopan Santun</td>
              <td><input type="text" class="form-control" name="etika_sopansantun"></td>
            </tr>
            <tr>
              <td>Kecepatan, Ketepatan & Kerapian</td>
              <td><input type="text" class="form-control" name="k3"></td>
            </tr>
          </table>
          <div class="row">
            <input type="text" class="form-control" name="keterangan">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
          <button type="submit" class="btn btn-primary">Simpan</button>
        </div>

      </div>
    </div>
  </form>
</div>