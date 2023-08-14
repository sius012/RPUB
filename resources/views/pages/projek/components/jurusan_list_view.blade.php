
<div class="content-wrapper">
            <!-- Content -->

            <div class="container-xxl flex-grow-1 container-p-y">
              <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Account Settings /</span> Account</h4>

              <div class="row">
                <div class="col-md-12">


                  {{--  button tambah projek  --}}
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#basicModal">
                          Tambah Jurusan
                        </button>

                  {{--  -----card projek jurusan--- note(nanti cardnya ini pake foreach)  --}}
                  <div class="row row-cols-1 row-cols-md-3 g-4">
                    <a href="">
                        <div class="col">
                        <div class="card h-100">
                        <img src="..." class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Nama Projek</h5>
                            <p class="card-text">Deskripsi Projek</p>
                            <p class="card-text">
                                <small class="text-muted">Jenis Projek</small>
                            </p>
                      </div>
                    </div>
                  </div></a>

                  </div>
                {{--  -----/card projek jurusan---  --}}

                </div>
              </div>
            </div>
            <!-- / Content -->



            <div class="content-backdrop fade"></div>
          </div>
