<!-- Modal Untuk Tambah Jurusan -->
<div class="modal fade" id="ub-jurusan-modal" tabindex="-1" aria-hidden="true">
    <form action="" method="">
        @csrf
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel1">UB Kompetensi Keahlian</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <table class='table'>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Jurusan</th>
                                <th>K3</th>
                            </tr>
                        </thead>
                        <tbody class="container-jurusan"></tbody>
                    </table>

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