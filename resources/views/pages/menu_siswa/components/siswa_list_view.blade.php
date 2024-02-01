<div class="content-wrapper" id="siswa-list-view" style="display:none">
    <!-- Content -->

    <div class="container-xxl flex-grow-1 container-p-y">


        <div class="row">
            <div class="col-md-12">


                {{--  button tambah projek  --}}
                <button type="button" class="btn btn-primary tambah-projek mb-3" data-bs-toggle="modal"
                    data-bs-target="#basicModal">
                    Tambah Siswa
                </button>



                {{--  -----card projek jurusan--- note(nanti cardnya ini pake foreach)  --}}
                <div class="row row-view">
                    <div class="col col-md-3 pb-3">


                        <div class="card" style="width: 18rem;">
                            <div class="card-body d-flex flex-row-reverse">
                                <div class="dropdown">
                                    <button type="button" class="btn p-0 dropdown-toggle hide-arrow"
                                        data-bs-toggle="dropdown">
                                        <i class="bx bx-dots-vertical-rounded"></i>
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href=""><i class="bx bx-edit-alt me-1"></i>
                                            Edit</a>
                                        <a class="dropdown-item" href=""><i class="bx bx-trash me-1"></i>
                                            Delete</a>
                                    </div>
                                </div>
                                <div class="keterangan">
                                    <h5 class="card-title">--nama siswa--</h5>
                                    <p class="card-text">kelas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- / Content -->



    <div class="content-backdrop fade"></div>
</div>
</div>
