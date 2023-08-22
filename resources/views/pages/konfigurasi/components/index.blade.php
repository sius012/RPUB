@extends('layout.layout')
@section('main-content')
    <div class="content-wrapper">
        <div class="container-xxl flex-grow-1 container-p-y ">
            <!------------------------Card Jurusan----------------->
            <div class="row ">
                <div class="card mb-3" style="width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="/img/elements/11.jpg" class="img-fluid rounded" alt="..." width="100%">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body d-flex flex-row-reverse">

                                <div class="dropdown  ">
                                    <button type="button" class="btn p-0 dropdown-toggle hide-arrow"
                                        data-bs-toggle="dropdown">
                                        <i class="bx bx-dots-vertical-rounded"></i>
                                    </button>
                                    <div class="dropdown-menu ">
                                        <a class="dropdown-item" href="javascript:void(0);"><i
                                                class="bx bx-edit-alt me-1"></i>
                                            Edit</a>
                                        <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-trash me-1"></i>
                                            Delete</a>
                                    </div>
                                </div>
                                <div class="keterangan">
                                    <h3 class="card-title">RPL</h3>
                                    <p class="card-text">Jurusan yang mempelajari cara untuk merekayasa dan membuat sebuah
                                        program/apk</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h1>Card Jurusan</h1>
            </div>




            <!-- ------------------Card angkatan----------------------->
            <div class="row">
                <div class="row row-cols-1 row-cols-md-4 g-4">
                    <div class="col">
                        <div class="card">
                            <img src="/img/elements/1.jpg" height="110px" width="100%" class="rounded-top">
                            <div class="card-body d-flex flex-row-reverse">
                                <div class="dropdown">
                                    <button type="button" class="btn p-0 dropdown-toggle hide-arrow"
                                        data-bs-toggle="dropdown">
                                        <i class="bx bx-dots-vertical-rounded"></i>
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href=""><i
                                                class="bx bx-edit-alt me-1"></i>
                                            Edit</a>
                                        <a class="dropdown-item" href=""><i class="bx bx-trash me-1"></i>
                                            Delete</a>
                                    </div>
                                </div>
                                <div class="keterangan">
                                    <h5 class="card-title">Angkatan 11</h5>
                                    <p class="card-text">Angkatan dengan jumlah siswa 92</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h1>Card Angkatan </h1>
            </div>




            <!-- Card siswa-->
            <div class="row">
                <div class="row row-cols-1 row-cols-md-6 g-4">
                    <div class="col">
                        <div class="card">
                            <img src="/img/avatars/6.png" width="100%" class="rounded-top">
                            <div class="card-body d-flex flex-row-reverse">
                                <div class="dropdown">
                                    <button type="button" class="btn p-0 dropdown-toggle hide-arrow"
                                        data-bs-toggle="dropdown">
                                        <i class="bx bx-dots-vertical-rounded"></i>
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href=""><i
                                                class="bx bx-edit-alt me-1"></i>
                                            Edit</a>
                                        <a class="dropdown-item" href=""><i class="bx bx-trash me-1"></i>
                                            Delete</a>
                                    </div>
                                </div>
                                <div class="keterangan">
                                    <h5 class="card-title">--nama--</h5>
                                    <p class="card-text">kelas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1>Card Siswa </h1>
        </div>



        <!-- Card Jenis Tugas-->
        <div class="row ">
            <div class="card mb-3" style="width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="/img/elements/20.jpg" class="img-fluid rounded" alt="..." width="100%">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body d-flex flex-row-reverse">

                            <div class="dropdown  ">
                                <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                    <i class="bx bx-dots-vertical-rounded"></i>
                                </button>
                                <div class="dropdown-menu ">
                                    <a class="dropdown-item" href=""><i class="bx bx-edit-alt me-1"></i>
                                        Edit</a>
                                    <a class="dropdown-item" href=""><i class="bx bx-trash me-1"></i>
                                        Delete</a>
                                </div>
                            </div>
                            <div class="keterangan">
                                <h3 class="card-title">Jenis Tugasnya</h3>
                                <p class="card-text">Jurusan </p>
                                <p class="card-text" >deskripsi tugas Lorem ipsum dolor sit amet. Est enim earum quo voluptatem unde est quaerat voluptates aut con</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1>Card Jenis Tugas</h1>
        </div>

        <!-- Card Pengguna-->
        <div class="row">
            <div class="col-sm-6 mb-3 mb-sm-0">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Nama Pengguna</h5>
                    <p class="card-text"></p>
                    <div class="btn-group">
                        <button
                          type="button"
                          class="btn btn-primary dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          hak akses
                        </button>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="">a hak akses</a> </li>
                          <li><a class="dropdown-item" href="">b hak akses</a> </li>
                          <li><a class="dropdown-item" href="">c hak akses</a> </li>
                        </ul>
                      </div>
                  </div>
                </div>
              </div>
            <h1>Card pengguna </h1>
        </div>
    </div>
@endsection
