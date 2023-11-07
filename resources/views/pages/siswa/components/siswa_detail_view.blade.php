<div class="container siswa-detail-view" style="display: none;">
    <div class="row">
        <div class="col-4">
            <div class="row">
                <div class="col-12 text-center">
                    <img src="" alt="" id="profile-image" class="m-5" style="border-radius: 50%">
                    <h3 id="title-main"></h3>

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
                    <table class="table">
                        <tr>
                            <th>Nama</th>
                            <td><span id="profile-nama"></span></td>
                        </tr>
                        <tr>
                            <th>TTL</th>
                            <td><span id="profile-ttl"></span></td>
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
                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
            </div>
        </div>
    </div>
</div>