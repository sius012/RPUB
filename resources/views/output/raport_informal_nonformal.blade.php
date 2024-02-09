<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        table {
            border-collapse: collapse;
        }

        td {
            border: 1px solid black;
            padding: 10px;

        }

        .vertical-td {
            writing-mode: vertical-lr;
        }
    </style>
</head>

<body>
    <table>
        <tr>
            <td colspan="15" align="center" style="font-weight: bold;">RAPOR INFORMAL DAN NON FORMAL SISWA BISNIS KONSTRUKSI DAN PROPERTI
            </td>
        </tr>
        <tr>
            <td colspan="15" align="center" style="font-weight: bold;">SMK BAGIMU NEGERIKU
            </td>
        </tr>
        <tr>
            <td colspan="15" align="center" style="font-weight: bold;">TAHUN PELAJARAN 2023/2024

            </td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3">Nama</td>
            <td>:</td>
            <td colspan="2">{{$siswa->nama}}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3">NIS/NISN</td>
            <td>:</td>
            <td colspan="2">{{$siswa->nis}}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3">Kelas</td>
            <td>:</td>
            <td colspan="2">{{$siswa->angkatan->kelas()." ".$siswa->jurusan->jurusan}}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3">Kompetensi Keahlian</td>
            <td>:</td>
            <td colspan="2">{{$siswa->jurusan->keterangan}}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3">Semester/Tahun Pelajaran</td>
            <td>:</td>
            <td colspan="2">III / 2023-2024</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td rowspan="2">No</td>
            <td rowspan="2">Kelas</td>
            <td rowspan="2">Mata Pelajaran</td>
            <td rowspan="2" colspan="2">Materi Pelajaran</td>
            <td rowspan="2">Nilai Non Formal (Kompeten/Tidak Kompeten)</td>
            <td colspan="8">Penilaian Informal</td>
            <td rowspan="2">Keterangan</td>
        </tr>
        <tr>
            <td class='vertical-td'>
                Inisiatif
            </td>
            <td class='vertical-td'>
                Antusias
            </td>
            <td class='vertical-td'>
                Kreativitas
            </td>
            <td class='vertical-td'>
                Kedisiplinan
            </td>
            <td class='vertical-td'>
                Tanggung jawab
            </td>
            <td class='vertical-td'>
                Komunikasi
            </td>
            <td class='vertical-td'>
                Etika dan Sopan,santun
            </td>
            <td class='vertical-td'>Kecepatan, Ketepatan dan Kerapian</td>
        </tr>
        @foreach($data as $i => $row)
        @foreach($row->tugas as $j => $tugas)
        @php
        $nonformal = sumNilai($tugas->penilaianProjek[0]->penilaian_non_formal,"nilai");
        @endphp
        <tr>
            @if($j == 0)
            <td rowspan="{{$row->tugas->count()}}">{{$i+1}}</td>
            <td rowspan="{{$row->tugas->count()}}">{{"X DKV 2"}}</td>
            <td rowspan="{{$row->tugas->count()}}">{{$row->nama}}</td>
            @endif
            <td>{{ 1+(($j+1)/10)}}</td>
            <td>{{$tugas->nama}}</td>
            <td>{{$nonformal}}</td>
            <td>{{$tugas->penilaianProjek[0]->penilaian_informal->inisiatif}}</td>
            <td>{{$tugas->penilaianProjek[0]->penilaian_informal->antusias}}</td>
            <td>{{$tugas->penilaianProjek[0]->penilaian_informal->kreativitas}}</td>
            <td>{{$tugas->penilaianProjek[0]->penilaian_informal->kedisiplinan}}</td>
            <td>{{$tugas->penilaianProjek[0]->penilaian_informal->tanggung_jawab}}</td>
            <td>{{$tugas->penilaianProjek[0]->penilaian_informal->komunikasi}}</td>
            <td>{{$tugas->penilaianProjek[0]->penilaian_informal->etika_sopansantun}}</td>
            <td>{{$tugas->penilaianProjek[0]->penilaian_informal->k3}}</td>
            <td>{{nilaiTulisan($nonformal)}}</td>
        </tr>
        @endforeach
        @endforeach
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
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
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Semarang, Desember 2024</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>Kepala SMK Bagimu Negeriku</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Ketua Kompetens Keahlian</td>
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
            <td></td>
            <td></td>
            <td></td>
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
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
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
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>Drs. Christianus Dwi Estafianto</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>.............</td>
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
            <td></td>
            <td></td>
            <td></td>
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
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td style="font-weight: bold;">Catatan</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td style="font-weight: bold;">Nilai Non Formal</td>
            <td></td>
            <td></td>
            <td>Penilaian Informal</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>86 sampai 100</td>
            <td>Sangat Kompeten</td>
            <td></td>
            <td>3</td>
            <td>Baik</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>71 sampai 85</td>
            <td>Kompeten</td>
            <td></td>
            <td>2</td>
            <td>Cukup</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>61 sampai 70</td>
            <td>Cukup Kompeten</td>
            <td></td>
            <td>1</td>
            <td>Kurang </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                kurang dari 61</td>
            <td>Belum Kompeten</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </table>
</body>

</html>