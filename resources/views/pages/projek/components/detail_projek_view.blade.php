{{-- ambil dari uitabspills  --}}


<div class="containers flex-grow-1 container-p-y" id="detail-projek-view" style="display:none">

    <div class="row">
        <div class="container-fluid">
            <h6 class="text-muted">Basic</h6>
            <div class="nav-align-top mb-4">
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item">
                        <button type="button" class="nav-link active" role="tab" data-bs-toggle="tab" data-bs-target="#informasi-projek" aria-controls="navs-top-home" aria-selected="true">
                            Informasi Projek
                        </button>
                    </li>
                    <li class="nav-item">
                        <button type="button" class="nav-link" role="tab" data-bs-toggle="tab" data-bs-target="#tugas" aria-controls="navs-top-profile" aria-selected="false">
                            Tugas
                        </button>
                    </li>
                    <li class="nav-item">
                        <button type="button" class="nav-link" role="tab" data-bs-toggle="tab" data-bs-target="#partisipan" aria-controls="navs-top-messages" aria-selected="false">
                            Partisipan
                        </button>
                    </li>
                    <li class="nav-item">
                        <button type="button" class="nav-link" role="tab" data-bs-toggle="tab" data-bs-target="#timeline" aria-controls="navs-top-messages" aria-selected="false">
                            Timeline
                        </button>
                    </li>
                    <li class="nav-item">
                        <button type="button" class="nav-link" role="tab" data-bs-toggle="tab" data-bs-target="#konfigurasi-projek" aria-controls="navs-top-messages" aria-selected="false">
                            Konfigurasi Projek
                        </button>
                    </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane fade  active " id="informasi-projek" role="tabpanel">
                        <div class="row">
                            <div class="col">
                                <div class="form-group mb-3">
                                    <label for="" class="form-label">Nama Projek</label>
                                    <input type="text" name="nama" class="nama-projek form-control" placeholder="tambahkan nama projek" />
                                </div>
                                <div class="form-group mb-3">
                                    <label for="" class="form-label">Tanggal Awal</label>
                                    <input type="date" name="tanggal-awal" class="tanggal-awal form-control" placeholder="" />
                                </div>
                                <div class="form-group mb-3">
                                    <label for="" class="form-label">Tanggal Akhir</label>
                                    <input type="date" name="tanggal-akhir" class="tanggal-akhir form-control" placeholder="" />
                                </div>
                                <div class="form-group mb-3">
                                    <label for="" class="form-label">Penanggung Jawab</label>
                                    <input type="text" name="pj" class="penanggung_jawab form-control" placeholder="" />
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group mb-3">
                                    <label for="" class="form-label">Jenis Projek</label>
                                    <input type="text" name="jenis-projek" class="jenis-projek form-control" placeholder="tambahkan nama projek" />
                                </div>
                                <div class="form-group mb-3">
                                    <label for="" class="form-label">Klien</label>
                                    <input type="text" name="klien" class="klien form-control" placeholder="tambahkan nama klien" />
                                </div>
                                <div class="form-group mb-3">
                                    <label for="" class="form-label">Nilai Projek</label>
                                    <input type="text" name="nominal" value="2000000" class="klien form-control" placeholder="tambahkan nama klien" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="tugas" role="tabpanel">
                        <button class="tambah-tugas btn btn-primary">Tambah Tugas</button>
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th data-name="title">Nama Tugas</th>
                                    <th>Status</th>
                                    <th>Keterangan</th>
                                    <th data-name="start_date">Dari</th>
                                    <th data-name="end_date">Sampai</th>
                                    <th>Partisipan</th>
                                </tr>
                            </thead>
                            <tbody class="table-border-bottom-0">
                                <tr>

                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="tab-pane fade" id="partisipan" role="tabpanel">

                    </div>
                    <div class="tab-pane fade" id="timeline" role="tabpanel">
                        <canvas id="canvas" width="800" height="700" style="border: 1px solid whitesmoke"></canvas>
                    </div>
                    <div class="tab-pane fade" id="konfigurasi-projek" role="tabpanel">
                        <table>
                            <tr>
                                <th>Arsipkan Projek</th>
                                <th><button class="btn btn-danger"><i class="fa fa-danger"></i></button></th>
                            </tr>
                            <tr>
                                <th>Kompetensi keahlian yang berpatisipasi</th>
                                <td><button class="btn btn-danger"><i class="fa fa-danger"></i></button></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>