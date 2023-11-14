<!-- Modal Untuk Tambah Jurusan -->
<div class="modal fade" id="modal-jurusan" tabindex="-1" aria-hidden="true">
    <form action="" method="">
        @csrf
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel1">Tambah Jurusan</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    {{--  <?php
                    foreach ($jurusan as $key => $jur) {
                        echo '<div class="form-check form-check-inline">';
                        echo '<input class="form-check-input" type="checkbox" id="inlineCheckbox' . ($key + 1) . '" name="jurusan[]" value="' . $jur . '">';
                        echo '<label class="form-check-label" for="inlineCheckbox' . ($key + 1) . '">' . $jur . '</label>';
                        echo '</div>';
                    }
                    ?>  --}}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
                    <button type="submit" class="btn btn-primary">Perbarui</button>
                </div>
            </div>
        </div>
    </form>
</div>
