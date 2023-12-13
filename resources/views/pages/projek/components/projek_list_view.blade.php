<div class="containers flex-grow-1 container-p-y" id="projek-list-view">


    <div class="row">
        <div class="col-md-12">
            {{-- button tambah projek  --}}
            <button type="button" class="btn btn-primary tambah-projek mb-3" data-bs-toggle="modal" data-bs-target="#basicModal">
                Tambah Projek
            </button>



            {{-- -----card projek jurusan--- note(nanti cardnya ini pake foreach)  --}}
            <div class="row row-view">
                <div class="col col-md-3 pb-3">
                    <div class="card">
                        <a href="#">
                            <img class="card-img-top" src="" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">Nama projek</h5>
                                <p class="card-text">
                                    deskripsi projek
                                </p>
                                <p class="card-text"><i class="far fa-user"></i>admin | <i class="fas fa-calendar-alt"></i>Jan 20, 2018</small></p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

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
