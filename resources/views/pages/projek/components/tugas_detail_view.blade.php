  {{--  @extends('layout.layout')
@section('main-content')    --}}

    <div class="modal fade" id="tugas-detail-view">
    <div class="modal-dialog flex-grow-1 container-p-y" >
        <div class="modal-content">
        <div class="nama p-4">
            <h3>Nama Tugas</h3>
        </div>
        <div class="d-flex p-2 m-5">
            <div class="image p-2">
                <img src="/dashboard/assets/img/avatars/7.png" class="img-thumbnail " >
            </div>
            <div class="keterangan">
                <div class="card-text d-flex">
                    <div class="status">
                      <b> Status :</b>
                    </div>

                </div>
                <div class="card-text d-flex">
                    <p> <b> Waktu Pengerjaan :</b></p>
                </div>
                <div class="card-text d-flex">
                   <b>Lokasi :</b>
                </div>
            </div>
            <div class="isi_keterangan">
                <div class="card-text d-flex">
                    <div class="demo-inline-spacing">
                        <span class="badge bg-primary">Primary</span>
                    </div>
                </div>
                <div class="card-text d-flex">
                    <p>12-12-2023/12-02-2024</p>
                </div>
                <div class="card-text d-flex">
                    <p>Path Projek</p>
                </div>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col">
                <div class="nav-align-top mb-4">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                            <button type="button" class="nav-link active" role="tab" data-bs-toggle="tab"
                                data-bs-target="#tugas1" aria-controls="navs-top-home" aria-selected="false">
                                Informasi Tugas
                            </button>
                        </li>
                        <li class="nav-item">
                            <button type="button" class="nav-link" role="tab" data-bs-toggle="tab"
                                data-bs-target="#versi1" aria-controls="navs-top-profile" aria-selected="false">
                                Versi
                            </button>
                        </li>
                        <li class="nav-item">
                            <button type="button" class="nav-link" role="tab" data-bs-toggle="tab"
                                data-bs-target="#partisipan1" aria-controls="navs-top-profile" aria-selected="false">
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
                                        <input type="text" name="nama" class="nama-tugas form-control"
                                            placeholder="nama tugas" />
                                    </div>
                                    <div class="form-group mb-3">
                                        <label for="" class="form-label">Keterangan</label>
                                        <textarea name="keterangan" class="keterangan form-control" placeholder="tambahkan keterangan"></textarea>
                                    </div>
                                    <div class="form-group mb-3">
                                        <label for="" class="form-label">Tanggal Awal</label>
                                        <input type="date" name="tanggal_awal" class="tanggal-awal form-control"
                                            placeholder="tanggal awal pembuatan" />
                                    </div>
                                    <div class="form-group mb-3">
                                        <label for="" class="form-label">Tanggal Akhir</label>
                                        <input type="date" name="tanggal_akhir" class="tanggal-akhir form-control"
                                            placeholder="tanggal akhir pembuatan" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="versi1" role="tabpanel">
                            <button type="button" class="btn btn-primary tombol-tambah-versi mb-3" data-bs-toggle="modal" data-bs-target="#basicModal" id="tombol-tambah-versi">
                                Buat Versi
                              </button>
                              <div id="versi-list"></div>
                        </div>
                        <div class="tab-pane fade" id="partisipan1" role="tabpanel">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div></div></div>

  {{--  @endsection  --}}
