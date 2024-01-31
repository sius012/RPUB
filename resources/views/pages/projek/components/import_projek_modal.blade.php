<div class="modal" tabindex="-1" id="import-projek-modal">
    <div class="modal-dialog">
        <form action="/projek" method='post' enctype="multipart/form-data">
            @csrf
            <input type="hidden" name='import' value="1">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Import Projek Excel</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row mb-3 form-group">
                        <label for="" class="form-label">Masukan File Excel</label>
                        <input type="file" name="file-excel" class="form-control" readonly>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </form>
    </div>
</div>