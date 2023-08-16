@extends('layout.layout')
@section('main-content')
    <div class="content-wrapper">
        <div class="container-xxl flex-grow-1 container-p-y">
            <!------------------------Card Jurusan----------------->
            <div class="row">
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="/img/elements/11.jpg" class="img-fluid rounded-start" alt="..." width="900px">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h3 class="card-title">RPL</h3>
                                <p class="card-text">Jurusan yang mempelajari cara untuk merekayasa dan membuat sebuah
                                    program/apk</p>
                                <div class="dropdown">
                                    <button type="button" class="btn p-0 dropdown-toggle hide-arrow"
                                        data-bs-toggle="dropdown">
                                        <i class="bx bx-dots-vertical-rounded"></i>
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="javascript:void(0);"><i
                                                class="bx bx-edit-alt me-1"></i>
                                            Edit</a>
                                        <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-trash me-1"></i>
                                            Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1>Card Jurusan</h1>
        </div>


        <!-- ------------------Card angkatan----------------------->
        <div class="row">
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card">
                        <img src="/img/elements/1.jpg" width="400px">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.</p>
                                <div class="dropdown">
                                    <button type="button" class="btn p-0 dropdown-toggle hide-arrow"
                                        data-bs-toggle="dropdown">
                                        <i class="bx bx-dots-vertical-rounded"></i>
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="javascript:void(0);"><i
                                                class="bx bx-edit-alt me-1"></i>
                                            Edit</a>
                                        <a class="dropdown-item" href="javascript:void(0);"><i class="bx bx-trash me-1"></i>
                                            Delete</a>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h1>Card Angkatan </h1>
    </div>


    <!-- Card siswa-->
    <div class="row">
        <div class="row row-cols-1 row-cols-md-3 g-4" id="projek-list-view">
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
                </div>
            </a>

        </div>
        <h1>Card Siswa </h1>
    </div>



    <!-- Card Jenis Tugas-->
    <div class="row">
        <div class="row row-cols-1 row-cols-md-3 g-4" id="projek-list-view">
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
                </div>
            </a>
        </div>
        <h1>Card Jenis </h1>
    </div>

    <!-- Card Pengguna-->
    <div class="row">
        <div class="row row-cols-1 row-cols-md-3 g-4" id="projek-list-view">
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
                </div>
            </a>
        </div>
        <h1>Card pengguna </h1>
    </div>
    </div>
    </div>
@endsection
