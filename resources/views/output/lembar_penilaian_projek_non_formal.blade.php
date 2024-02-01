<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Non Formal</title>
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
        @foreach($penilaian->penilaian_non_formal as $i=> $p)


        <tr>
            @if($i == 0)
            <td rowspan="{{$penilaian->penilaian_non_formal->count()}}">1</td>
            <td rowspan="{{$penilaian->penilaian_non_formal->count()}}">Hasil Kerja</td>
            @endif
            <td>{{$p->indikator->nama}}</td>
            <td>{{$p->indikator->nilai_max}}</td>
            <td>{{$p->nilai}}</td>
            <td></td>

        </tr>


        @endforeach

        <tr>
            <td>Jumlah Skor Maksimal</td>
            <td></td>
            <td></td>
            <td>100</td>
            <td>80</td>
            <td>Lulus</td>
        </tr>
        <tr>
            <td>Kriteria Skor Maksimal</td>
            <td></td>
            <td></td>
            <td>75</td>
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