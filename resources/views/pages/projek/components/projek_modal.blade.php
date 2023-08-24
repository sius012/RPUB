             <!-- Modal Untuk Tambah Projek -->
                <div class="modal fade" id="projek-modal" tabindex="-1" aria-hidden="true">
                    <form action="" method="">
                        @csrf
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
                              <label for="nameBasic" class="form-label">Nama Projek</label>
                              <input type="text" name="nama" class="form-control" placeholder="Masukkan Nama Projek" required/>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col mb-3">
                              <label for="nameBasic" class="form-label">Tanggal Awal</label>
                              <input type="date" name="tanggal_awal" class="form-control" placeholder="Masukkan Tanggal" required/>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col mb-3">
                              <label for="nameBasic" class="form-label">Tanggal Akhir</label>
                              <input type="date" name="tanggal_akhir" class="form-control" placeholder="Masukkan Tanggal" required/>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col mb-3">
                              <label for="nameBasic" class="form-label">Penanggung Jawab</label>
                              <select name="id_penajnggung_jawab" class="form-select" aria-label="Default select example">
                                <option value=""></option>
                              </select>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col mb-3">
                              <label for="nameBasic" class="form-label">Jenis Projek</label>
                              <select name="jenis_projek" class="form-select" aria-label="Default select example">
                                <option value=""></option>
                              </select>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col mb-3">
                              <label for="nameBasic" class="form-label">Klien</label>
                              <input type="text" name="klien" class="form-control" placeholder="Masukkan Klien" required/>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col mb-3">
                              <label for="nameBasic" class="form-label">Deskripsi</label>
                              <input type="text" name="deskripsi" class="form-control" placeholder="Masukkan deskripsi projek" required/>
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
                          <div class="col mb-3">
                            <label for="nameBasic" class="form-label">id_jurusan</label>
                            <input type="hidden" name="id_jurusan" class="form-control" placeholder="tambahkan id jurusan" required/>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                            Close
                          </button>
                          <button type="submit" class="btn btn-primary" id="">Buat Projek</button>
                        </div>
                      </div>
                    </div>
                </form>
                  </div>
                <!-- Akhir Modal Untuk Tambah Jurusan -->

