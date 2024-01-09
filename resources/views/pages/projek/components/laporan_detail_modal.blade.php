<div class="modal" tabindex="-1" id="laporan-detail-modal">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Detail Laporan</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-5"><img src="{{asset('/img/logo/logo1.svg')}}" class="img-preview" alt="" style="width: 100%;"></div>
                    <div class="col-7">
                        <div class="container">
                            <h4 class="m-0 py-2" id="judul-laporan"></h4>
                            <p class="m-0">Dibuat oleh: <b><span id="dibuat-oleh"></span></b></p>
                            <p class="m-0">Tanggal: <b><span id="tanggal-laporan"></span></b></p>
                            <p class="m-0">Referensi Tugas/Kompetensi: <b><span id="tugas-laporan"></span></b></p>
                            <p class="m-0">Referensi Projek: <b><span id="projek-laporan"></span></b></p>
                            <p class="m-0">Status: <b><span id="status-laporan"></span></b></p>
                            <div class="containers mt-2">
                                <label for="form-label mt-3">Keterangan</label>
                                <p id="keterangan"></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
            </div>
        </div>
    </div>
</div>