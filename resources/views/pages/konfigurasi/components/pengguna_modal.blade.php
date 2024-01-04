<!-- Modal Untuk Tambah pengguna -->
<div class="modal fade" id="pengguna-modal" tabindex="-1" aria-hidden="true">
    <form action="" method="">
        @csrf
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel1">Pengguna</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col mb-3">
                            <label for="nameBasic" class="form-label">Nama pengguna</label>
                            <input type="text" name="name" class="form-control" placeholder="Masukkan nama pengguna" required />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col mb-3">
                            <label for="nameBasic" class="form-label">Email</label>
                            <input type="email" name="email" class="form-control" placeholder="Masukkan email pengguna" required />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col mb-3">
                            <label for="nameBasic" class="form-label">Password</label>
                            <input type="password" name="password" class="form-control" placeholder="Masukkan password" required />
                        </div>
                    </div>
                    <div class="col mb-3">
                        <label for="nameBasic" class="form-label">Sebagai</label>
                        <select name="role" class="form-select">
                            <option value="">-</option>
                            <option value="">-</option>
                            <option value="">-</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Tambah Pengguna</button>
                </div>
            </div>
        </div>
    </form>
</div>