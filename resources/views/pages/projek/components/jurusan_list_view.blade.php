@extends('layout.layout')
@section('main-content')
<div class="content-wrapper" id="jurusan-list-view">
            <!-- Content -->

            <div class="container-xxl flex-grow-1 container-p-y">


              <div class="row">
                <div class="col-md-12">


                  <!-- {{--  button tambah projek  --}}
                        <button type="button" class="btn btn-primary tambah-jurusan mb-3" data-bs-toggle="modal" data-bs-target="#basicModal" id="tambah-jurusan">
                          Tambah Jurusan
                        </button> -->

                  {{--  -----card projek jurusan--- note(nanti cardnya ini pake foreach)  --}}
                  <div class="row row-jurusan">
                        <div class="col col-md-3 pb-3">
                            <a href="">
                        <div class="card h-100">
                        <img src="..." class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Nama Jurusan</h5>
                            <p class="card-text"></p>
                            <p class="card-text">
                                <small class="text-muted">Jumlah Projek</small>
                            </p>
                      </div>
                    </div></a>
                  </div>
                  </div>
                {{--  -----/card projek jurusan---  --}}

                </div>
              </div>
            </div>
            <!-- / Content -->
            <div class="content-backdrop fade"></div>
          </div>
