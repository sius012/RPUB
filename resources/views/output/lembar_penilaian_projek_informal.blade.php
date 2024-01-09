<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Informal</title>
    <style>

    </style>
</head>

<body>
    @php
    date_default_timezone_set('Asia/Jakarta');

    @endphp
    <table>
        <tr>
            <td colspan="6" align="center">YAYASAN BAGIMU NEGERIKU
            </td>
        </tr>
        <tr>
            <td colspan="6" align="center">SMK BAGIMU NEGERIKU SEMARANG

            </td>
        </tr>
        <tr>
            <td colspan="6" align="center">No SK Pendirian : 420/2823/2011, NSS :4020 363 16087, NPSN : 2036 2057

            </td>
        </tr>
        <tr>
            <td colspan="6" align="center"> Jl. Palir Raya No. 66-68 Ngaliyan Semarang Telp. (024) 76437854
            </td>
        </tr>
        <tr>
            <td colspan="6" align="center"> email : sekolah@smkbagimunegeriku.sch.id , Website : www.smkbagimunegeriku.sch.id

            </td>
        </tr>
        <tr>
            <td>-</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="6" align="center">LEMBAR PENILAIAN PROJECT
            </td>
        </tr>
        <tr>
            <td>-</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Nama Project</td>
            <td></td>
            <td>{{$penilaian->tugas->projek->nama}}</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Lokasi Projek</td>
            <td></td>
            <td>SMK BAGIMU NEGERIKU</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Kompetensi</td>
            <td></td>
            <td>{{$penilaian->tugas->nama}}</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>-</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>No</td>
            <td>Aspek</td>
            <td>Indikator</td>
            <td>Skor Max</td>
            <td>Skor yang dicapai</td>
            <td>Keterangan</td>
        </tr>


        <tr>
            <td rowspan="8">1</td>
            <td rowspan="8">Informal</td>
            <td>Inisiatif</td>
            <td></td>
            <td>{{$penilaian->penilaian_informal->inisiatif}}</td>
            <td>Kurang</td>
        </tr>
        <tr>
            <td>Antusias</td>
            <td></td>
            <td>{{$penilaian->penilaian_informal->antusias}}</td>
            <td>Kurang</td>
        </tr>
        <tr>
            <td> Kreatifitas</td>
            <td></td>
            <td>{{$penilaian->penilaian_informal->kreativitas}}</td>
            <td>Kurang</td>
        </tr>
        <tr>
            <td>Kedisiplinan</td>
            <td>2</td>
            <td>{{$penilaian->penilaian_informal->kedisiplinan}}</td>
            <td>Kurang</td>
        </tr>
        <tr>
            <td>Tanggung Jawab</td>
            <td>2</td>
            <td>{{$penilaian->penilaian_informal->tanggung_jawab}}</td>
            <td>Kurang</td>
        </tr>
        <tr>
            <td> Komunikasi</td>
            <td>2</td>
            <td>{{$penilaian->penilaian_informal->komunikasi}}</td>
            <td>Kurang</td>
        </tr>
        <tr>
            <td> Etika dan Sopan Santun</td>
            <td>2</td>
            <td>{{$penilaian->penilaian_informal->etika_sopansantun}}</td>
            <td>Kurang</td>
        </tr>
        <tr>
            <td> Kecepatan, Ketepatan dan Kerapian</td>
            <td>2</td>
            <td>{{$penilaian->penilaian_informal->k3}}</td>
            <td>Kurang</td>
        </tr>


        <tr>
            <td colspan="4">Kesimpulan</td>
            <td>Lulus</td>
            <td>Tidak Lulus</td>
        </tr>
        <tr>
            <td>-</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="2">Catatan:</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>3</td>
            <td colspan="2">Baik</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>2</td>
            <td colspan="2">Cukup</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>3</td>
            <td colspan="2">Kurang</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td colspan="2">
                Semarang, {{ date("j F Y",strtotime($penilaian->created_at)) }}
            </td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>Penguji</td>
            <td></td>
            <td>
                Siswa Praktikan
            </td>
            <td></td>
        </tr>
        <tr>
            <td>-</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>-</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>-</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>-</td>
            <td>
            </td>
            <td>{{ $penilaian->penilai->name }}</td>
            <td></td>
            <td>{{ $penilaian->siswa->nama }}
            </td>
            <td></td>
        </tr>
    </table>
</body>

</html>