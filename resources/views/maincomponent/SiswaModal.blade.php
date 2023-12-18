<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalform">
  Launch static backdrop modal
</button>

<!-- Modal -->
<div class="modal fade" id="modalform" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Form Siswa</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class='form-group mb-3' draggable='true'><label class='form-label'>nis</label><input class='form-control' name='nis' type='text'></div>
        <div class='form-group mb-3' draggable='true'><label class='form-label'>nama</label><input class='form-control' name='nama' type='text'></div>
        <div class='form-group mb-3' draggable='true'><label class='form-label'>jk</label><select class='form-select' name='jk'>
            <option value='Laki-laki'>Laki-laki</option>
            <option value='Perempuan'>Perempuan</option>
          </select></div>
        <div class='form-group mb-3' draggable='true'><input class='form-control' name='id_angkatan' type='hidden'></div>
        <div class='form-group mb-3' draggable='true'><input class='form-control' name='id_jurusan' type='hidden'></div>
        <div class='form-group mb-3' draggable='true'><label class='form-label'>kelas</label><select class='form-select' name='kelas'>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select></div>

        <div class='form-group mb-3' draggable='true'><label class='form-label'>password</label><input class='form-control' name='password' type='text'></div>
        <div class='form-group mb-3' draggable='true'><label class='form-label'>email</label><input class='form-control' name='email' type='text'></div>
        <div class='form-group mb-3' draggable='true'><label class='form-label'>created_at</label><input class='form-control' name='created_at' type='text'></div>
        <div class='form-group mb-3' draggable='true'><label class='form-label'>updated_at</label><input class='form-control' name='updated_at' type='text'></div>
        <div class='form-group mb-3' draggable='true'><label class='form-label'>fotoprofil</label><input class='form-control' name='fotoprofil' type='text'></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>