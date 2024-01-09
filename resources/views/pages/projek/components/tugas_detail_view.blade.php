  {{-- @extends('layout.layout')
@section('main-content')    --}}
  </style>
  <div class="modal fade" id="tugas-detail-view">
      <div class="modal-dialog flex-grow-1 container-p-y">
          <div class="modal-content">

              <div class="row mt-2">
                  <div class="col">
                      <div class="nav-align-top mb-4">
                          <ul class="nav nav-tabs" role="tablist" id='tab-tugas-detail-view'>
                              <li class="nav-item">
                                  <button type="button" class="nav-link active" role="tab" data-bs-toggle="tab" data-bs-target="#tugas1" aria-controls="navs-top-home" aria-selected="false">
                                      Informasi Tugas
                                  </button>
                              </li>
                              <li class="nav-item">
                                  <button type="button" class="nav-link" role="tab" data-bs-toggle="tab" data-bs-target="#versi1" aria-controls="navs-top-profile" aria-selected="false">
                                      Laporan
                                  </button>
                              </li>
                              <li class="nav-item">
                                  <button type="button" class="nav-link" role="tab" data-bs-toggle="tab" data-bs-target="#indikator-kompetensi" aria-controls="navs-top-profile" aria-selected="false">
                                      Indikator Kompetensi
                                  </button>
                              </li>
                              <li class="nav-item">
                                  <button type="button" class="nav-link" role="tab" data-bs-toggle="tab" data-bs-target="#partisipan1" aria-controls="navs-top-profile" aria-selected="false">
                                      Partisipan
                                  </button>
                              </li>
                          </ul>
                          <div class="tab-content">
                              <div class="tab-pane fade show active" id="tugas1" role="tabpanel">
                                  <div class="row">
                                      <div class="col">
                                          <div class="form-group mb-3">
                                              <label for="" class="form-label">Nama Tugas</label>
                                              <input type="text" name="nama" class="nama-tugas form-control" placeholder="nama tugas" readonly />
                                          </div>
                                          <div class="form-group mb-3">
                                              <label for="" class="form-label">Keterangan</label>
                                              <textarea name="keterangan" class="keterangan form-control" placeholder="tambahkan keterangan" readonly></textarea>
                                          </div>
                                          <div class="form-group mb-3">
                                              <label for="" class="form-label">Tanggal Awal</label>
                                              <input type="date" name="tanggal_awal" class="tanggal-awal form-control" placeholder="tanggal awal pembuatan" readonly />
                                          </div>
                                          <div class="form-group mb-3">
                                              <label for="" class="form-label">Tanggal Akhir</label>
                                              <input type="date" name="tanggal_akhir" class="tanggal-akhir form-control" placeholder="tanggal akhir pembuatan" readonly />
                                          </div>
                                      </div>
                                  </div>
                              </div>

                              <div class="tab-pane fade" id="versi1" role="tabpanel">
                                  <button type="button" class="btn btn-primary tombol-tambah-versi mb-3" id="tombol-tambah-versi">
                                      Buat Laporan
                                  </button>
                                  <div id="versi-list"></div>
                              </div>
                              <div class="tab-pane fade" id="indikator-kompetensi" role="tabpanel">
                                  <div class="container-fluid ">
                                      <table class="table">
                                          <thead>
                                              <tr>
                                                  <th>No</th>
                                                  <th>Indikator</th>
                                                  <th>Nilai Maksimal</th>
                                                  <th></th>
                                              </tr>
                                          </thead>
                                          <tbody>

                                          </tbody>
                                      </table>
                                  </div>
                              </div>
                              <div class="tab-pane fade" id="partisipan1" role="tabpanel">
                                  <div class="container-fluid" id="partisipan-container">

                                  </div>
                              </div>

                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>

  {{-- @endsection  --}}