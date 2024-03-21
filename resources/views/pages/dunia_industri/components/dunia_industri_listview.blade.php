<div class="container" id="dunia-industri-listview" style="display: none;">
    <button class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#modal-tambah-dudi">Tambah Dunia Industri</button>
    <div class="row container-dudi">

    </div>

    
<div class="modal" tabindex="-1" id="modal-tambah-dudi">
    <form action="">
    <div class="modal-dialog">  
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Tambah Dunia Industri</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="container-fluid">
                <div class="row mb-3">
                    <label for="" class="form-label">Nama</label>
                    <input type="text" class="form-control" name="nama" required>
                  </div>
                  <div class="row mb-3" >
                    <label for="" class="form-label">Deskripsi</label>
                    <textarea id="" cols="30" rows="10" class="form-control" name='deskripsi' required></textarea>
                  </div>
                  <div class="row mb-3">
                    <label for="" class="form-label">Alamat</label>
                    <input type="text" class="form-control" name='alamat' required>
                  </div>
                  <div class="row mb-3">
                    <label for="" class="form-label">Logo</label>
                    <input type="file" class="form-control" name='logo' required accept="image/*">
                  </div>
                  <div class="container container-jurusan row">
                    
                  </div>
            </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
</form>
</div>
</div>
