<div class="container-fluid p-0" id="projek-list-view">
    <div class="row mb-3">
        <div class="col">
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-primary tambah-projek" data-bs-toggle="modal" data-bs-target="#basicModal">
                    Tambah Projek
                </button>
                <button type="button" class="btn btn-success btn-import"><i class='fa fa-file-excel-o'></i></button>
            </div>

        </div>
        <div class="col"><select name="" id="" class="filter-jurusan form-control">
            </select></div>
    </div>
    <div class="row">

        <div class="col-md-12">
            {{-- button tambah projek  --}}
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-card-projek" type=" button" role="tab" aria-controls="pills-home" aria-selected="true"><i class="fa fa-th"></i> Card List</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link btn-table" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-table-projek" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><i class="fa fa-table"></i> Tabel</button>
                </li>
            </ul>
            <div class="tab-content p-0" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-card-projek" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div class="row row-view" style="width: 100%;">

                    </div>
                </div>
                <div class="tab-pane fade p-0" id="pills-table-projek" role="tabpanel" aria-labelledby="pills-table-projek">
                    <div class="card p-3 row-view-table">
                        <table class='table'>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nama</th>
                                    <th>Penanggung Jawab</th>
                                    <th>Jenis</th>
                                    <th>Jurusan</th>
                                    <th>Status</th>
                                    <th>Dari</th>
                                    <th>Sampai</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
            </div>




            {{-- -----card projek jurusan--- note(nanti cardnya ini pake foreach)  --}}


        </div>
        {{-- -----/card projek jurusan---  --}}

    </div>
</div>
</div>
<!-- / Content -->



<div class="content-backdrop fade"></div>
</div>


<script type="text/javascript">
    var link = document.getElementById('click');
</script>