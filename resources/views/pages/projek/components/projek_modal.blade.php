             <!-- Modal Untuk Tambah Projek -->
                <div class="modal fade" id="basicModal" tabindex="-1" aria-hidden="true">
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
                              <input type="text" id="nameBasic" class="form-control" placeholder="Masukkan Nama Projek" />
                            </div>
                          </div>
                          <div class="row">
                            <div class="col mb-3">
                              <label for="nameBasic" class="form-label">Tanggal Awal</label>
                              <input type="date" id="nameBasic" class="form-control" placeholder="Masukkan Tanggal" />
                            </div>
                          </div>
                          <div class="row">
                            <div class="col mb-3">
                              <label for="nameBasic" class="form-label">Tanggal Akhir</label>
                              <input type="date" id="nameBasic" class="form-control" placeholder="Masukkan Tanggal" />
                            </div>
                          </div>
                          <div class="row">
                            <div class="col mb-3">
                              <label for="nameBasic" class="form-label">Nama Penanggung Jawab</label>
                              <input type="text" id="nameBasic" class="form-control" placeholder="Masukkan Nama Penanggung Jawab" />
                            </div>
                          </div>
                          <div class="row">
                            <div class="col mb-3">
                              <label for="nameBasic" class="form-label">Jenis Projek</label>
                              <select>
                                <option value="">kesulitan ss</option>
                                <option>kesulitan a</option>
                                <option>kesulitan b</option>
                                <option>kesulitan c</option>
                              </select>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col mb-3">
                              <label for="nameBasic" class="form-label">Klien</label>
                              <input type="text" id="nameBasic" class="form-control" placeholder="Masukkan Klien" />
                            </div>
                          </div>
                          <div class="row">
                            <div class="col mb-3">
                              <label for="nameBasic" class="form-label">Deskripsi</label>
                              <input type="text" id="nameBasic" class="form-control" placeholder="Masukkan deskripsi projek" />
                            </div>
                          </div>
                          <div class="row">
                            <div class="col mb-3">
                              <label for="nameBasic" class="form-label">Status</label>
                              <select>
                                <option value="">Belum Selesai/option>
                                <option value="">Sedang Dikerjakan</option>
                                <option value="">Selesai</option>
                                <option value="">Revisi</option>
                                <option value="">Ditunda</option>
                              </select>
                            </div>
                          </div>
                          <div class="row"> 
                            <div class="col mb-3">
                              <label for="nameBasic" class="form-label">Nama Pembuat</label>
                              <input type="text" id="nameBasic" class="form-control" placeholder="Masukkan nama pembuat" />
                            </div>
                          </div>
                          <div class="row">
                            <div class="col mb-3">
                              <label for="nameBasic" class="form-label">Asal jurusan</label>
                              @foreach ( )
                              <select>
                                <option value="">Belum Selesai/option>
                              </select>
                              @endforeach
                            </div>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                            Close
                          </button>
                          <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                <!-- Akhir Modal Untuk Tambah Jurusan -->

