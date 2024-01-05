{{-- ambil dari uitabspills  --}}
<div class="containers" id="detail-projek-view" style="display: none;">
    <div class="row">
        <div class="container-fluid">


            <div class="nav-align-top mb-4">
                <div class="mb-3">
                    <div class="card p-3">
                        <div class="row">
                            <div class="col">
                                <h4 class='main-title m-0'></h4>
                            </div>
                            <div class="col">
                                <div class="container-status-main"></div>
                            </div>
                        </div>
                    </div>
                </div>
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
                        <button type="button" class="nav-link" role="tab" data-bs-toggle="tab" data-bs-target="#laporan" aria-controls="navs-top-profile" aria-selected="false">
                            Laporan
                        </button>
                    </li>
                    <li class="nav-item">
                        <button type="button" class="nav-link" role="tab" data-bs-toggle="tab" data-bs-target="#partisipan" aria-controls="navs-top-messages" aria-selected="false">
                            Partisipan
                        </button>
                    </li>
                    <li class="nav-item">
                        <button type="button" class="nav-link" role="tab" data-bs-toggle="tab" data-bs-target="#konfigurasi-projek" aria-controls="navs-top-messages" aria-selected="false">
                            Konfigurasi Projek
                        </button>
                    </li>
                </ul>

                <div class="tab-content">
                    <div class="tab-pane fade  show active " id="informasi-projek" role="tabpanel">
                        <form action="">
                            <div class="form-group mb-3">
                                <button type="button" class="btn btn-warning btn-edit"><i class='fa fa-edit'></i> </button>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <input type="hidden" name="id" class="id-projek">
                                    <div class="form-group mb-3">
                                        <label for="" class="form-label">Nama Projek</label>
                                        <input type="text" name="nama" class="nama-projek form-control" placeholder="tambahkan nama projek" readonly />
                                    </div>
                                    <div class="form-group mb-3">
                                        <label for="" class="form-label">Deskripsi</label>
                                        <input type="text" name="deskripsi" class="deskripsi form-control" placeholder="tambahkan nama projek" readonly />
                                    </div>
                                    <div class="form-group mb-3">
                                        <label for="" class="form-label">Tanggal Awal</label>
                                        <input type="date" name="tanggal_awal" class="tanggal-awal form-control" placeholder="" readonly />
                                    </div>
                                    <div class="form-group mb-3">
                                        <label for="" class="form-label">Tanggal Akhir</label>
                                        <input type="date" name="tanggal_akhir" class="tanggal-akhir form-control" placeholder="" readonly />
                                    </div>
                                    <div class="form-group mb-3">
                                        <label for="" class="form-label">Penanggung Jawab</label>
                                        <select disabled name="id_penanggung_jawab" id=" " class="penanggung_jawab form-control">

                                        </select>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group mb-3">
                                        <label for="" class="form-label">Jenis Projek</label>
                                        <input type="text" name="jenis_projek" class="jenis-projek form-control" placeholder="tambahkan nama projek" readonly />
                                    </div>
                                    <div class="form-group mb-3">
                                        <label for="" class="form-label">Klien</label>
                                        <input type="text" name="klien" class="klien form-control" placeholder="tambahkan nama klien" readonly />
                                    </div>
                                    <div class="form-group mb-3">
                                        <label for="" class="form-label">Nilai Projek</label>
                                        <input type="text" name="nominal" value="2000000" class="nominal form-control" placeholder="tambahkan nama klien" readonly />
                                    </div>
                                    <div class="form-group">
                                        <label for="nameBasic" class="form-label">Status</label>
                                        <select name="status" class="status form-select" disabled aria-label="Default select example">
                                            <option value="Belum Dimulai">Belum Dimulai</option>
                                            <option value="Siap Dikerjakan">Siap Dikerjakan</option>
                                            <option value="Sedang Dikerjakan">Sedang Dikerjakan</option>
                                            <option value="Revisi">Revisi</option>
                                            <option value="Ditunda">Ditunda</option>
                                            <option value="Ditinjau">Ditinjau</option>
                                            <option value="Selesai">Selesai</option>
                                        </select>
                                    </div>
                                    <div class="form-group mb-3">
                                        <label for="" class="form-label">Jurusan</label>
                                        <div class="container-jurusan-row">

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary perbarui-informasi">Perbarui</button>
                        </form>
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

                    <div class="tab-pane fade" id="laporan" role="tabpanel">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th data-name="title">Judul</th>
                                    <th>Keterangan</th>
                                    <th>Status</th>
                                    <th>Tugas</th>
                                    <th data-name="start_date">Tanggal</th>

                                    <th>Dikirim Oleh</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                </tr>
                            </tbody>
                        </table>
                    </div>


                    <div class="tab-pane fade" id="partisipan" role="tabpanel">
                    </div>

                    <div class="tab-pane fade" id="konfigurasi-projek" role="tabpanel">
                        <div class="row">
                            <div class="col">Arsipkan Projek</div>
                            <div class="col"><button class="btn btn-primary btn-arsip"><i class="fa fa-archive"></i></button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>