{{--  @extends('layout.layout')
@section('main-content')  --}}

    <div class="card">
    <div class="container-xxl flex-grow-1 container-p-y" id="tugas-detail-view">
        <div class="nama p-3">
            <h1>Nama Tugas</h1>
        </div>
        <div class="d-flex p-3">
            <div class="image">
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
            <div class="col-xl-6">
                <div class="nav-align-top mb-4">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                            <button type="button" class="nav-link active" role="tab" data-bs-toggle="tab"
                                data-bs-target="#tugas" aria-controls="navs-top-home" aria-selected="true">
                                Informasi Tugas
                            </button>
                        </li>
                        <li class="nav-item">
                            <button type="button" class="nav-link" role="tab" data-bs-toggle="tab"
                                data-bs-target="#versi" aria-controls="navs-top-profile" aria-selected="false">
                                Versi
                            </button>
                        </li>
                        <li class="nav-item">
                            <button type="button" class="nav-link" role="tab" data-bs-toggle="tab"
                                data-bs-target="#versi" aria-controls="navs-top-profile" aria-selected="false">
                                Partisipan
                            </button>
                        </li>

                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="tugas" role="tabpanel">
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
                                        <input type="date" name="tanggal-awal" class="tanggal-awal form-control"
                                            placeholder="tanggal awal pembuatan" />
                                    </div>
                                    <div class="form-group mb-3">
                                        <label for="" class="form-label">Tanggal Akhir</label>
                                        <input type="date" name="tanggal-akhir" class="tanggal-akhir form-control"
                                            placeholder="tanggal akhir pembuatan" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="versi" role="tabpanel">

                        </div>
                        <div class="tab-pane fade" id="partisipan" role="tabpanel">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div></div>

{{--  @endsection  --}}
