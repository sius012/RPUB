<!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalform">
              Launch static backdrop modal
            </button>
            
            <!-- Modal -->
            <div class="modal fade"  id="modalform" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Form Jurusan</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class='form-group mb-3' draggable='true'><label class='form-label'>jurusan</label><input class='form-control' name='jurusan' type='text'></div>
                    <div class='form-group mb-3' draggable='true'><label class='form-label'>keterangan</label><input class='form-control' name='keterangan' type='text'></div>
                    <div class='form-group mb-3' draggable='true'><label class='form-label'>created_at</label><input class='form-control' name='created_at' type='text'></div>
                    <div class='form-group mb-3' draggable='true'><label class='form-label'>updated_at</label><input class='form-control' name='updated_at' type='text'></div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Understood</button>
                  </div>
                </div>
              </div>
            </div>