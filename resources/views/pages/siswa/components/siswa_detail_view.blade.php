<div class="container siswa-detail-view" style="display: none;">
    <div class="row">
        <div class="col-4">
            <div class="row">
                <div class="col-12 text-center">
                    <img src="" alt="" id="profile-image" class="m-5" style="border-radius: 50%; width: 60%; aspect-ratio: 1 / 1; object-fit: cover">
                    <h3 id="title-main"></h3>
                    <h3 id="kelas"></h3>
                </div>
            </div>
        </div>
        <div class="col-8">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Projek</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Biodata</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Raport</button>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div class="container container-projek">

                    </div>
                </div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div class="card">
                        <table class="table">
                            <tr>
                                <th>Nama</th>
                                <td><span id="profile-nama"></span></td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td><span id="profile-email"></span></td>
                            </tr>
                            <tr>
                                <th>JK</th>
                                <td><span id="profile-jk"></span></td>
                            </tr>
                            <tr>
                                <th>Angkatan</th>
                                <td><span id="profile-angkatan"></span></td>
                            </tr>
                            <tr>
                                <th>Jurusan</th>
                                <td><span id="profile-jurusan"></span></td>
                            </tr>
                        </table>
                    </div>

                </div>
                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <div class="container-fluid">
                        @for($i = 0; $i < 6;$i++) <div class="row row-view raportcard mb-2" data-semester="{{$i+1}}">
                            <div class="card h-100">
                                <div class="card-body">
                                    <div class="row m-0">
                                        <div class="col-7">
                                            <h5 class="card-title m-0">Semester {{$i+1}}</h5>
                                        </div>
                                        <div class="col-5 text-end">
                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <button type="button" class="btn btn-success"><i class="fa fa-download"></i></button>
                                                <button type="button" class="btn btn-info"><i class="fa fa-info"></i></button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                    </div>
                    @endfor
                </div>






            </div>


        </div>



    </div>
</div>
</div>
</div>
</div>
</div>