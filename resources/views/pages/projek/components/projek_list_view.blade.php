
<div class="content-wrapper" id="projek-list-view" style="display:none">
            <!-- Content -->

            <div class="container-xxl flex-grow-1 container-p-y">


              <div class="row">
                <div class="col-md-12">


                  {{--  button tambah projek  --}}
                        <button type="button" class="btn btn-primary tambah-projek mb-3" data-bs-toggle="modal" data-bs-target="#basicModal">
                          Tambah Projek
                        </button>



                  {{--  -----card projek jurusan--- note(nanti cardnya ini pake foreach)  --}}
                  <div class="row row-view">
                    <div class="col col-md-3 pb-3">
                        <a href="">
                        <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">Nama Projek</h5>
                            <p class="card-text">Deskripsi Projek</p>
                            <p class="card-text">
                                <small class="text-muted">Jenis Projek</small>
                            </p>
                      </div>
                    </a>
                    </div>
                  </div>

                  </div>
                {{--  -----/card projek jurusan---  --}}

                </div>
              </div>
            </div>
            <!-- / Content -->



            <div class="content-backdrop fade"></div>
          </div>
        </div>
