<div class="container" id="menu-dudi-view" style="display: none;">
    <div class="row">
        <div class="col-4 text-center"><img src="" style="width: 50%;aspect-ratio: 1/1;object-fit:cover" class="rounded-circle my-auto logo-img" alt=""><h3 class="mt-4 nama-dudi-info">Perusahaan</h4></div>
        <div class="col-8">
            <div class="containers card p-2">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Kloter Magang</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-form-tab" data-bs-toggle="pill" data-bs-target="#pills-form" type="button" role="tab" aria-controls="pills-form" aria-selected="false">Form Penilaian</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Template Penilaian</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-info-tab" data-bs-toggle="pill" data-bs-target="#pills-info" type="button" role="tab" aria-controls="pills-info" aria-selected="false">Contact</button>
                    </li>
                </ul>
                <div class="tab-content p-0" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div class="container-fluids container-kloter-dudi-main">
                            <div class="row">
                                <div class="col-12 text-end">
                                    <button class="btn btn-add-kloter btn-primary" data-bs-toggle="modal" data-bs-target="#modal-kloter">Tambah Kloter</button>
                                </div>
                            </div>
                            <table class="table container-kloter-dudi">
                              <thead>
                                <tr>
                                  <th>Kloter</th>
                                  <th>Laki - Laki</th>
                                  <th>Perempuan</th>
                                  <th>Aksi</th>
                                </tr>
                              </thead>
                              <tbody>
                                
                              </tbody>
                            </table>
                        </div>


                        <div class="container-siswa-main" style="display: none;">
                            <div class="row">
                               <div class="col-6">
                                <button class="btn btn-primary btn-back"><i class='fa fa-back'></i>Kembali</button>
                               </div>
                                <div class="col-6 text-end">
                                    <button class="btn btn-add-siswa btn-primary" data-bs-toggle="modal" data-bs-target="#modal-siswa-kloter">Tambah Siswa</button>
                                </div>
                            </div>
                            <table class="table container-siswa mt-5">
                              <thead>
                                <tr>
                                  <th>Nama Siswa</th>
                                  <th>Kelas</th>
                                  <th class="text-end">Aksi</th>
                                </tr>
                              </thead>
                              <tbody></tbody>
                            </table>
                        </div>

                    </div>
                    <div class="tab-pane fade show" id="pills-form" role="tabpanel" aria-labelledby="pills-form-tab">
                        <div class="container">
                            <button class="btn btn-primary btn-tambah-form" data-bs-toggle="modal" data-bs-target="#modal-buat-form">Buat Form Penilaian</button>
                            <table class="list-form-penilaian table ">
                              <thead>
                                <tr>
                                  <th>No</th>
                                  <th>Template</th>
                                  <th>Tanggal</th>
                                  <th>Url</th>
                                  <th>Aksi</th>
                                </tr>
                              </thead>
                              <tbody>

                              </tbody>
                            </table>
                            
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <button class="btn btn-primary btn-modal-template" data-bs-toggle="modal" data-bs-target="#modal-tambah-template" >Tambah Modal Penilaian</button>
                        <table class="table container-template-magang">
                          <thead>
                            <tr>
                              <th>Nama Template</th>
                              <th>Status</th>
                              <th>Aksi</th>
                            </tr>
                          </thead>
                          <tbody>

                          </tbody>
                        </table>
                    </div>
                    <div class="tab-pane fade" id="pills-info" role="tabpanel" aria-labelledby="pills-info-tab">
                        <div class="container container-info mb-5">
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group mb-3">
                                        <div class="form-label">Nama Dunia Industri</div>
                                         <input type="text" class="form-control nama-dudi">
                                    </div>
                                    <div class="form-group">
                                        <div class="form-label">Alamat</div>
                                         <input type="text" class="form-control alamat-dudi">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group  mb-3">
                                        <div class="form-label ">Deskripsi</div>
                                         <input type="text" class="form-control deskripsi-dudi">
                                    </div>
                                    <div class="form-group">
                                        <div class="form-label">Logo</div>
                                         <input type="file" class="form-control">
                                    </div>
                                </div>
                            </div>
                            <button class="btn mt-3 btn-danger">Hapus</button>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div class="modal" tabindex="-1" id="modal-kloter">
        <form action="" id="form-kloter-dudi">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Tambah Kloter Magang</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="container">
                            <input type="hidden" name='id_dunia_industri' required>
                            <div class="form-group mb-3">
                                <label for="" class="form-label">Nama</label>
                                <input type="text" class="form-control" name='nama' required>
                            </div>
                            <div class="form-group mb-3">
                                <label for="" class="form-label">Tanggal Mulai</label>
                                <input type="date" class="form-control" name='tanggal_mulai' required>
                            </div>
                            <div class="form-group mb-3">
                                <label for="" class="form-label">Tanggal Selesai</label>
                                <input type="date" class="form-control" name='tanggal_selesai' required>
                            </div>

                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                        <button type="submit" class="btn btn-primary">Tambah Kloter</button>
                    </div>
                </div>
            </div>
        </form>
    </div>

    <div class="modal" tabindex="-1" id="modal-siswa-kloter">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Cari Siswa</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for=""></label>
                        <input type="text" class="form-control search-siswa">
                        <ul class='container-siswa-search list-container-search'></ul>
                    </div>
                    <div class="container-siswa-kloter container pt-3">

                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary update-siswa-button">Perbarui</button>
                </div>
            </div>
        </div>
    </div>


    <div class="modal" tabindex="-1" id="modal-tambah-template">
        <form action="">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Tambah Template Penilaian</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-4">
                    <input type="hidden" name='id_dunia_industri'>
                    <div class="form-group">
                        <label for="" class="form-label">Nama Template</label>
                        <input type="text" class="form-control" name="nama" required>
                    </div>
                    <div class="form-group">
                        <label for="" class="form-label">Deksripsi</label>
                        <input type="text" class="form-control" name="deskripsi" required>
                    </div>
                </div>
                <div class="col-md-8">
                    <button class="btn btn-primary btn-tambah-nonformal" type="button">Tambah Detail Penilaian</button>
                    <div class="container pt-4">
                        <div class="row p-3" >
                            <div class="col-md-4">Indikator</div>
                            <div class="col-md-3">Nilai. Max</div>
                            <div class="col-md-2">Aspek</div>
                        </div>
                        <div class="container-nilai-nonformal container mt-2">
                            
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="type" class="btn btn-primary">Kirim</button>
            </div>
          </div>
        </div>
    </form>
      </div>

      <div class="modal" tabindex="-1" id="modal-buat-form">
        <form action="">
          <input type="hidden" name="id_form">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" data-html="Buat Form Penilaian">Buat Form Penilaian</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="form-group mb-3">
                <label for="" class="form-label">Pilih Template Penilaian</label>
                <select name="id_template_form" id="" class="form-select">
                    <option value=""></option>
                </select>
              </div>
              <div class="form-group mb-3">
                <label for="" class="form-label">Token</label>
                <div class="row">
                  <div class="col-8"><input type="text" class="form-control" name='token' required required></div>
                  <div class="col-4">
                    <button class="btn btn-secondary btn-random" type="button">Random</button>
                  </div>
                </div>
              </div>
              <div class="form-group mb-3">
                <label for="" class="form-label">Tanggal Kadaluarsa</label>
                <input type="datetime-local" class="form-control" name='expired_form' required>
              </div>
              <div class="form-group mb-3">
                <label for="" class="form-label">Siswa</label>
                <input type="text" class="form-control search-siswa">
                <ul class="list-group container-search-siswa-form">
                    
                </ul>
                <div class="container siswa-list-form">

                </div>
                
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary" data-html='Buat Form'>Buat Form</button>
            </div>
          </div>
        </div>
    </form>
      </div>

      <div class="modal" tabindex="-1" id="modal-link-form-penilaian">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Link Form Penilaian</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <textarea class="form-control mb-3" name='text-copy' id="" cols="30" rows="10">Selamat Pagi bapak Intruktur dari Dudi
                
Kami mau mengirimkan link form penilaian</textarea>
                <input type="hidden" value="{{url('dudi')."/"}}" name='realurl'>
              <input type="text" class="form-control link-field mt-3 mb-3" >
              <button class="btn btn-success mb-3 copy-text-form"><i class="fa fa-copy"></i> Salin ke Clipboard</button>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal" tabindex="-1" id="modal-riwayat-penilaian-siswa">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Penilaian Magang <span id='nama-siswa'></span></h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <input type="hidden" name='id_siswa'>
              <table class="table ">

                <thead>
                    <tr>
                        <th>NO</th>
                        <th>Tgl Penilaian</th>
                        <th>Nama Penilai</th>
                        <th>Template Penilaian</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
              </table>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
            </div>
          </div>
        </div>
      </div>


      <div class="modal" tabindex="-1" id='modal-info-penilaian'>
        <div class="modal-dialog modal-xl">
          <div class="modal-content ">
            <div class="modal-header">
              <h5 class="modal-title">Info Penilaian Dunia Industri</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <table class="table">
                <tr>
                    <th>Nama:</th>
                    <td class="nama-info"></td>
                </tr>
                <tr>
                    <th>Penilai: </th>
                    <td class="penilai-info">Akuang</td>
                </tr>
                <tr>
                    <th>Tanggal Penilaian</th>
                    <td class="tanggal-info">12 Januari 2005</td>
                </tr>
              </table>
              <div class="container p-3">
                <h4>Penilaian Non Formal</h4>
              <table class="table table-non-formal">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Aspek</th>
                        <th>Indikator</th>
                        <th>Nilai Max</th>
                        <th>Nilai</th>
                        <th>Keterangan</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
          </div>
            <div class="container p-3">
              <h4>Penilaian Informal</h4>
              <table class="table table-informal">
                  <thead>
                      <tr>
                          <th>No</th>
                          <th>Indikator</th>
                          <th>Nilai Minimal</th>
                          <th>Nilai</th>
                      </tr>
                  </thead>
                  <tbody>
                      
                  </tbody>
              </table>
              <div class="form-group">
                  <label for="" class="form-label">Keterangan</label>
                  <p class='keterangan-informal-info'></p>
              </div>
          
          </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
            </div>
          </div>
        </div>
      </div>
</div>

