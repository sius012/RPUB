<div class="row" id="konfigurasi_siswa_view" style="display: none;">
    <div class="container d-flex">
        <div class="button">
            <button type="button" class="btn btn-primary btn-tambah-siswa mb-2" data-bs-toggle="modal" data-bs-target="#basicModal" id="tambah-jurusan">
                Tambah Data Siswa
            </button>

            <form id="searchForm">
                <label for="siswa">Nama siswa:</label>
                <input type="text" name="siswa" placeholder="Cari Nama Siswa..">

                <label for="jurusan">Angkatan</label>
                <select name="jurusan" id="angkatan">
                    <option value="">Semua</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>

                </select>

                <label for="angkatan">Jurusan</label>
                <select name="angkatan" id="jurusan">
                    <option value="">Semua</option>
                    <option value="1">RPL</option>
                    <option value="2">DKV 1</option>
                    <option value="3">DKV 2</option>
                    <option value="4">TKP</option>
                    <option value="5">TP</option>
                    <option value="6">Kuliner</option>

                </select>

                <button type="submit">Search</button>
            </form>

            <!-- Display results here -->
            <div id="results"></div>

            <script>
                // Handle form submission
                document.getElementById('searchForm').addEventListener('submit', function(event) {
                    event.preventDefault();
                    // Fetch and display results using JavaScript (e.g., Fetch API)
                });
            </script>


            <div class="container-siswa">
                <div class="card">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama</th>
                                <th>Angkatan</th>
                                <th>Jurusan</th>
                                <th>Kelas dan Jurusan</th>
                                <th>Email</th>
                                <th>Jenis Kelamin</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>