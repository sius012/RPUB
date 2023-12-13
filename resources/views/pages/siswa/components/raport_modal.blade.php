<!-- Modal Untuk Raport -->
<div class="modal fade" id="raport-modal" tabindex="-1" aria-hidden="true">
    <form action="" method="">
        @csrf
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel1">Penilaian Raport</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <table class="tables" style="width: 100%;">
                            <tr>
                                <th rowspan="2">Projek</th>
                                <th colspan="3">Penilaian Nonformal</th>
                            </tr>
                            <tr>
                                <th>Inisiatif</th>
                                <th>Antusias</th>
                                <th>Kejujuran</th>
                                <th>Kreatifitas</th>
                                <th>Kedisiplinan</th>
                                <th>Tanggung Jawab</th>
                                <th>Komunikasi</th>
                                <th>Etika & Sopan Santun</th>
                                <th>Ketepatan, Kecepatan & Kerapian</th>
                                <th>Keterangan</th>
                            </tr>
                            <tr>
                                <td>WEB</td>
                                <td>B</td>
                                <td>B</td>
                                <td>B</td>
                                <td>B</td>
                                <td>B</td>
                                <td>B</td>
                                <td>B</td>
                                <td>B</td>
                                <td>B</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                        Download
                    </button>
                    <button type="submit" class="btn btn-primary">Buka</button>
                </div>
            </div>
        </div>
    </form>
</div>

{{-- /modal tambah jurusan  --}}