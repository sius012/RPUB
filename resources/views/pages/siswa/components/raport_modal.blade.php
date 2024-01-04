<!-- Modal Untuk Raport -->
<div class="modal fade" id="raport-modal" tabindex="-1" aria-hidden="true">
    <form action="" method="">
        @csrf
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel1">Penilaian Raport</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#output" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Output</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#projek" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Projek</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="output" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div class="container-fluid" style="overflow-x: scroll;">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Projek</th>
                                            <th>Penilaian Nonformal</th>
                                            <th>Inisiatif</th>
                                            <th>Antusias</th>
                                            <th>Kejujuran</th>
                                            <th>Kreatifitas</th>
                                            <th>Tanggung Jawab</th>
                                            <th>Komunikasi</th>
                                            <th>Etika & Sopan Santun</th>
                                            <th>Ketepatan, kecepatan & Kerapian</th>
                                            <th>Keterangan</th>
                                        </tr>
                                        <thead>
                                        <tbody></tbody>
                                </table>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="projek" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                        Download
                    </button>
                    <button type="submit" class="btn btn-primary">Buka</button>
                </div>
            </div>
        </div>
    </form>
</div>

{{-- /modal tambah jurusan  --}}