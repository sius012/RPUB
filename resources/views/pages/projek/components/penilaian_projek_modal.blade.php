<div class="modal" tabindex="-1" id="penilaian-projek-modal">

  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Penilaian Projek</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="container-tugas">

        </div>
        <div class="container-penilaian">
          <input type="hidden" name='id_penilaian'>
          <form action="" method="post">
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Non-Formal</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Informal</button>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div class="container-indikator">

                  <table class="table">
                    <thead>
                      <tr>
                        <th>Indikator</th>
                        <th>Nilai Max</th>
                        <th>Nilai</th>
                      </tr>
                    </thead>
                    <tbody>

                    </tbody>
                  </table>

                </div>
              </div>
              <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

                <div class="container-fluid">
                  <input type="hidden" name='id_pif'>
                  <table class="table table-informal">
                    <thead>
                      <tr>
                        <th>Aspek</th>
                        <th>Nilai</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Inisiatif</td>
                        <td><select name="inisiatif" id="" class="form-control">
                            <option value="3">Baik</option>
                            <option value="2">Cukup</option>
                            <option value="1">Kurang</option>
                          </select></td>
                      </tr>
                      <tr>
                      <tr>
                        <td>Antusias</td>
                        <td><select name="antusias" id="" class="form-control">
                            <option value="3">Baik</option>
                            <option value="2">Cukup</option>
                            <option value="1">Kurang</option>
                          </select></td>
                      </tr>
                      <tr>
                        <td>Kejujuran</td>
                        <td><select name="kejujuran" id="" class="form-control">
                            <option value="3">Baik</option>
                            <option value="2">Cukup</option>
                            <option value="1">Kurang</option>
                          </select></td>
                      </tr>
                      <tr>
                        <td>Kreativitas</td>
                        <td><select name="kreativitas" id="" class="form-control">
                            <option value="3">Baik</option>
                            <option value="2">Cukup</option>
                            <option value="1">Kurang</option>
                          </select></td>
                      </tr>
                      <tr>
                        <td>Tanggung Jawab</td>
                        <td><select name="tanggung_jawab" id="" class="form-control">
                            <option value="3">Baik</option>
                            <option value="2">Cukup</option>
                            <option value="1">Kurang</option>
                          </select></td>
                      </tr>
                      <tr>
                        <td>Komunikasi</td>
                        <td><select name="komunikasi" id="" class="form-control">
                            <option value="3">Baik</option>
                            <option value="2">Cukup</option>
                            <option value="1">Kurang</option>
                          </select></td>
                      </tr>
                      <tr>
                        <td>Kedisiplinan</td>
                        <td><select name="kedisiplinan" id="" class="form-control">
                            <option value="3">Baik</option>
                            <option value="2">Cukup</option>
                            <option value="1">Kurang</option>
                          </select></td>
                      </tr>
                      <tr>
                        <td>Etika dan Sopan Santun</td>
                        <td><select name="etika_sopansantun" id="" class="form-control">
                            <option value="3">Baik</option>
                            <option value="2">Cukup</option>
                            <option value="1">Kurang</option>
                          </select></td>
                      </tr>
                      <tr>
                        <td>K3</td>
                        <td><select name="k3" id="" class="form-control">
                            <option value="3">Baik</option>
                            <option value="2">Cukup</option>
                            <option value="1">Kurang</option>
                          </select></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>
            </div>

          </form>
        </div>
      </div>
      <div class="modal-footer">
        <span class="text-danger mx-2 validate-note" style="display: none;">* Pasikan semua kolom terisi dengan benar!</span>
        <button class="btn btn-warning btn-edit" type="button"><i class="fa fa-edit"></i></button>
        <button type="submit" class="btn btn-primary submit-penilaian">Kirim</button>
      </div>

    </div>
  </div>
</div>