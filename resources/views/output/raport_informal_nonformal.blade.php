<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FRP - Kompetensi</title>

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

        .bordered{
            border: 2px solid black;
        }

        .headerin{
            background: rgb(93, 55, 55);
        }
    </style>
</head>

<body>
    <table>
        <tr>
            <td colspan="15" align="center" style="font-weight: bold; font-size: 12pt">RAPOR INFORMAL {{"&"}} NON FORMAL SISWA {{ strtoupper($siswa->jurusan->keterangan) }}
            </td>
        </tr>
        <tr>
            <td colspan="15" align="center" style="font-weight: bold; font-size: 12pt">SMK BAGIMU NEGERIKU
            </td>
        </tr>
        <tr>
            <td colspan="15" align="center" style="font-weight: bold; font-size: 12pt">TAHUN PELAJARAN {{schoolYearFromSemesterAndEntry($semester,$siswa->angkatan->dari)}}

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
            <td colspan="3" >Nama</td>
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
            <td colspan="2" align="left">{{$siswa->nis}}</td>
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
            <td colspan="2">{{toRoman($siswa->angkatan->kelas())." ".$siswa->jurusan->jurusan}}</td>
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
            <td colspan="2">{{toRoman($semester)}} / {{schoolYearFromSemesterAndEntry($semester,$siswa->angkatan->dari)}}</td>
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
            <td rowspan="2" class="bordered " style="background: #F2F2F2; border: 2px solid black; text-align:center" valign='center'>No</td>
            <td rowspan="2" class="bordered " style="background: #F2F2F2;border: 2px solid black; text-align:center" valign='center'>Kelas</td>
            <td rowspan="2" class="bordered " style="background: #F2F2F2;border: 2px solid black; text-align:center" valign='center'>Mata Pelajaran</td>
            <td rowspan="2"  colspan="2" class="bordered " style="background: #F2F2F2;border: 1px solid black;text-align:center" valign='center'>Materi Pelajaran</td>
            <td rowspan="2" class="bordered " style="background: #F2F2F2;border: 2px solid black;text-align:center" valign='center'>Nilai Non Formal (Kompeten/Tidak Kompeten)</td>
            <td colspan="8" class="bordered " style="background: #F2F2F2;border: 2px solid black;text-align:center" valign='center'>Penilaian Informal</td>
            <td rowspan="2" class="bordered " style="background: #F2F2F2;border: 2px solid black;text-align:center" valign='center'>Keterangan</td>
        </tr>
        <tr>
            <td class='vertical-td bordered' style="background: #F2F2F2; border: 1px solid black" >
                Inisiatif
            </td>
            <td class='vertical-td bordered' style="background: #F2F2F2; border: 1px solid black">
                Antusias
            </td>
            <td class='vertical-td bordered' style="background: #F2F2F2; border: 1px solid black">
                Kreativitas
            </td>
            <td class='vertical-td bordered' style="background: #F2F2F2; border: 1px solid black">
                Kedisiplinan
            </td>
            <td class='vertical-td bordered' style="background: #F2F2F2; border: 1px solid black">
                Tanggung jawab
            </td>
            <td class='vertical-td bordered' style="background: #F2F2F2; border: 1px solid black">
                Komunikasi
            </td>
            <td class='vertical-td bordered' style="background: #F2F2F2; border: 1px solid black">
                Etika dan Sopan,santun
            </td>
            <td class='vertical-td bordered' style="background: #F2F2F2; border: 1px solid black">Kecepatan, Ketepatan dan Kerapian</td>
        </tr>
        @foreach($data as $i => $row)
        @foreach($row->tugas as $j => $tugas)
        @php
        $nonformal = sumNilai($tugas->penilaianProjek[0]->penilaian_non_formal,"nilai");
        @endphp
        <tr>
            @if($j == 0)
            <td rowspan="{{$row->tugas->count()}}" style="border: 1px solid black">{{$i+1}}</td>
            <td rowspan="{{$row->tugas->count()}}" style="border: 1px solid black">{{classFromProject($siswa->angkatan->dari,$row->tanggal_awal)}}</td>
            <td rowspan="{{$row->tugas->count()}}" style="border: 1px solid black">{{$row->nama}}</td>
            @endif
            <td class="bordered" style="border: 1px solid black">{{ 1+(($j+1)/10)}}</td>
            <td class="bordered" style="border: 1px solid black">{{$tugas->nama}}</td>
            <td class="bordered" style="border: 1px solid black">{{$nonformal}}</td>
            <td class="bordered" style="border: 1px solid black">{{$tugas->penilaianProjek[0]->penilaian_informal->inisiatif}}</td>
            <td class="bordered" style="border: 1px solid black">{{$tugas->penilaianProjek[0]->penilaian_informal->antusias}}</td>
            <td class="bordered" style="border: 1px solid black">{{$tugas->penilaianProjek[0]->penilaian_informal->kreativitas}}</td>
            <td class="bordered" style="border: 1px solid black">{{$tugas->penilaianProjek[0]->penilaian_informal->kedisiplinan}}</td>
            <td class="bordered" style="border: 1px solid black">{{$tugas->penilaianProjek[0]->penilaian_informal->tanggung_jawab}}</td>
            <td class="bordered" style="border: 1px solid black">{{$tugas->penilaianProjek[0]->penilaian_informal->komunikasi}}</td>
            <td class="bordered" style="border: 1px solid black">{{$tugas->penilaianProjek[0]->penilaian_informal->etika_sopansantun}}</td>
            <td class="bordered" style="border: 1px solid black">{{$tugas->penilaianProjek[0]->penilaian_informal->k3}}</td>
            <td class="bordered" style="border: 1px solid black">{{nilaiTulisan($nonformal)}}</td>
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
            <td>Ketua Kompetensi Keahlian</td>
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
            <td style="font-weight: bold;">Nilai Non Formal :</td>
            <td></td>
            <td></td>
            <td style="font-weight: bold;">Penilaian Informal :</td>
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
            <td>86 - 100</td>
            <td>Sangat Kompeten</td>

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
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>71 - 85</td>
            <td>Kompeten</td>
      
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
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>61 - 70</td>
            <td>Cukup Kompeten</td>

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
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                {{"<"}} 61</td>
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