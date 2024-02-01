<div class="container-fluid p-0" id='profil-akun-siswa'>
    <div class="row">
        <div class="col-md-4 text-center mb-4">
            <div class="container-profil">
                <img src="{{asset('/img/profilsiswa/default.jpg')}}" alt="" id="pp-previewer" style="width: 60%;aspect-ratio:1/1;object-fit:cover; border-radius: 50%">
            </div>
            <button class="btn btn-primary" id="btn-change-image" style="position:absolute; left: -60px;top: -10px; position:relative"><i class="fa fa-photo"></i></button>
            <form action="" method="post" id='form-pp' enctype="multipart/form-data">
                <input type="file" name='pp_img' id='pp-img' style="display: none;" accept="image/*">
            </form>
        </div>
        <div class="col-md-8">
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-profil-tab" data-bs-toggle="pill" data-bs-target="#pills-profil" type="button" role="tab" aria-controls="pills-profil" aria-selected="true">Profil</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-kredensial-tab" data-bs-toggle="pill" data-bs-target="#pills-kredensial" type="button" role="tab" aria-controls="pills-kredensial" aria-selected="true">Kredensial</button>
                </li>
            </ul>
            <div class="tab-content p-0" id="pills-tabContent">
                <div class="tab-pane fade show active p-0" id="pills-profil" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div class="card p-4">
                        <div class="row mb-3">
                            <div class="col-4">Nama</div>
                            <div class="col-8"><b><span class='field-nama'></span></b></div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-4">Kelas</div>
                            <div class="col-8"><b><span class='field-kelas-dan-jurusan'></span></b></div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-4">Jenis Kelamin</div>
                            <div class="col-8"><b><span class='field-jk'></span> </b></div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-4">Angkatan </div>
                            <div class="col-8"><b><span class='field-angkatan'></span> </b></div>
                        </div>
                        <div class="row">
                            <div class="col-4">Jurusan </div>
                            <div class="col-8"><b><span class='field-jurusan'></span> </b></div>
                        </div>
                    </div>
                    <div class="row p-3">
                        <button class='btn btn-primary' id="perbarui-pp" style="display: none">Perbarui</button>
                    </div>
                </div>
                <div class="tab-pane fade show  p-0" id="pills-kredensial" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div class="card p-4">

                        <div class="containers">
                            <button class="btn btn-warning btn-edit-kredensial mb-3"><i class="fa fa-edit mr-2"></i><span class="ml-2">Edit</span></button>
                            <form action="" method="post" id='form-kredensial' disabled>
                                <div class="form-group mb-3">
                                    <label for="" class="form-label">Email</label>
                                    <input type="email" class="form-control" name='email' readonly required>
                                </div>
                                <div class="form-group mb-3">
                                    <label for="" class="form-label">Password</label>
                                    <input type="password" name='password' class="form-control" value='12345678' readonly>
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-primary" type="submit" style="display: none;">Perbarui</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="row p-3">
                        <button class='btn btn-primary' id="perbarui-pp" style="display: none">Perbarui</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>