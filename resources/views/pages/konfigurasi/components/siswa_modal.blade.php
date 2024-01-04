<!-- Modal -->
<div class="modal fade" id="siswa-modal" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" enctype="multipart/form-data">
    <form action="">
        @csrf
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Form Siswa</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col">
                            <input type="hidden" name="id">
                            <div class='form-group mb-3' draggable='true'><label class='form-label'>nis</label><input class='form-control' name='nis' type='number'></div>
                            <div class='form-group mb-3' draggable='true'><label class='form-label'>nama</label><input class='form-control' name='nama' type='text'></div>
                            <div class='form-group mb-3' draggable='true'><label class='form-label'>jk</label><select class='form-select' name='jk'>
                                    <option value='Laki-laki'>Laki-laki</option>
                                    <option value='Perempuan'>Perempuan</option>
                                </select></div>
                            <div class='form-group mb-3' draggable='true'><label class='form-label'>Angkatan</label><select name="id_angkatan" class='form-control' id="">
                                    <option value=""></option>
                                </select></div>

                        </div>
                        <div class="col">
                            <div class='form-group mb-3' draggable='true'><label class='form-label'>Jurusan</label><select name="id_jurusan" class='form-control' id="">
                                    <option value=""></option>
                                </select></div>
                            <div class='form-group mb-3' draggable='true'><label class='form-label'>email</label><input class='form-control' name='email' type='email'></div>
                            <div class='form-group mb-3' draggable='true'><label class='form-label'>password</label><input class='form-control' name='password' type='text'>

                            </div>
                            <div class='form-group mb-3' draggable='true'>
                                <div class="row mb-3">
                                    <div class="col"><label class='form-label'>fotoprofil</label><input class='form-control' name='fotoprofil' type='file'></div>

                                </div>
                                <div class="form-group">
                                    <div class="col"> <img src="" alt="" class='pp-viewer' style="width: 100px; height: 100px; object-fit: cover"></div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                    <button type="submit" class="btn btn-primary">Simpan</button>
                </div>
            </div>
        </div>
    </form>
</div>