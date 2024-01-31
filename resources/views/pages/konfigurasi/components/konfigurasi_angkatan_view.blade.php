<style>
    /* Gaya untuk memperbesar tulisan di tabel */
    .table th,
    .table td {
        font-size: 14px;
        /* Sesuaikan dengan ukuran yang diinginkan */
    }

    /* Gaya untuk memperbesar tulisan pada dropdown */
    .dropdown-menu a {
        font-size: 14px;
        /* Sesuaikan dengan ukuran yang diinginkan */
    }
</style>

<div class="content-wrapper" style="display: none;" id="konfigurasi_angkatan_view">
    <div class=" container-xxl">
        <div class="row">

            <div class="button"><button type="button" class="btn btn-primary btn-tambah-angkatan mb-4" data-bs-toggle="modal" data-bs-target="#basicModal" id="tambah-jurusan">
                    Tambah Angkatan
                </button></div>

            <div class="card">
                <table class="table table-hover angkatan-table">
                    <thead>
                        <tr>
                            <th>Id Angkatan</th>
                            <th>Tgl Masuk</th>
                            <th>Tgl Selesai</th>
                            <th>Jumlah Siswa</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">
                        <tr>
                            <td><i class="fab fa-angular fa-lg text-danger me-3"></i> <strong>angkatan</strong></td>
                            <td>~~~~~~~</td>
                            <td>
                                <div class="dropdown">
                                    <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                        <i class="bx bx-dots-vertical-rounded"></i>
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-edit-alt me-1"></i> Edit</a>
                                        <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-trash me-1"></i> Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><i class="fab fa-angular fa-lg text-danger me-3"></i> <strong>angkatan</strong></td>
                            <td>~~~~~~~</td>
                            <td>
                                <div class="dropdown">
                                    <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                        <i class="bx bx-dots-vertical-rounded"></i>
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-edit-alt me-1"></i> Edit</a>
                                        <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-trash me-1"></i> Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><i class="fab fa-angular fa-lg text-danger me-3"></i> <strong>angkatan</strong></td>
                            <td>~~~~~~~</td>
                            <td>
                                <div class="dropdown">
                                    <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                        <i class="bx bx-dots-vertical-rounded"></i>
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-edit-alt me-1"></i> Edit</a>
                                        <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-trash me-1"></i> Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>