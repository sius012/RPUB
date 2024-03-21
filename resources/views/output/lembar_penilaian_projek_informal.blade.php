<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{$pageNumber}} - Informal</title>
    <style>
        * {
            font-size: 11pt;
        }
    </style>

</head>

<body>
    @php
    date_default_timezone_set('Asia/Jakarta');
    @endphp
    <table>
        <tr>
            <td colspan="6" style="font-size: 10pt; text-align:center;font-family: Arial, Helvetica, sans-serif"><b>YAYASAN BAGIMU NEGERIKU</b></td>
        </tr>
        <tr>
            <td colspan="6" style="font-size: 12pt; text-align:center;font-family: Arial, Helvetica, sans-serif"><b>SMK BAGIMU NEGERIKU</b></td>
        </tr>
        <tr>
            <td colspan="6" style="font-size: 10pt; text-align:center;font-family: Arial, Helvetica, sans-serif">No SK Pendirian : 420/2823/2011, NSS :4020 363 16087, NPSN : 2036 2057					
            </td>
        </tr>
        <tr>
            <td colspan="6" style="font-size: 10pt; text-align:center;font-family: Arial, Helvetica, sans-serif">   Jl. Palir Raya No. 66-68 Ngaliyan Semarang Telp. (024) 76437854					
			
            </td>
        </tr>
        <tr>
            <td colspan="6" style="font-size: 10pt; text-align:center;border-bottom: 1px double black"> email : sekolah@smkbagimunegeriku.sch.id , Website : www.smkbagimunegeriku.sch.id					

            </td>
        </tr>
        <tr>
            <td colspan=""></td>
            <td colspan=""></td>
            <td colspan=""></td>
            <td colspan=""></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="6" align="center" style="font-size: 11pt; font-weight: bold">LEMBAR PENILAIAN PROJECT
            </td>
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
            <td style="font-size: 11pt">Nama Project</td>
            <td></td>
            <td style="font-size: 11pt">: {{$penilaian->tugas->projek->nama}}</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td style="font-size: 11pt">Lokasi Projek</td>
            <td></td>
            <td style="font-size: 11pt">: {{$penilaian->tugas->projek->lokasi}}</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td style="font-size: 11pt">Kompetensi</td>
            <td></td>
            <td>: {{$penilaian->tugas->nama}}</td>
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
            <td style="border: 1px solid black">No</td>
            <td style="text-align:center;font-weight: bold">Aspek</td>
            <td style="text-align:center;font-weight: bold">Indikator</td>
            <td style="text-align:center;font-weight: bold">Skor Minimal</td>
            <td style="text-align:center;font-weight: bold">Skor yang dicapai</td>
            <td style="text-align:center;font-weight: bold">Keterangan</td>
        </tr>
        <tr>
            <td style="text-align: end">1</td>
            <td>Informal</td>
            <td style="text-align: end">a. Inisiatif</td>
            <td style="text-align: end">2</td>
            <td style="text-align: end">{{$penilaian->penilaian_informal->inisiatif}}</td>
            <td style="text-align: center">{{nilai123($penilaian->penilaian_informal->inisiatif)}}</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>b. Antusias</td>
            <td style="text-align: end">2</td>
            <td style="text-align: end">{{$penilaian->penilaian_informal->antusias}}</td>
            <td style="text-align: center">{{ nilai123($penilaian->penilaian_informal->antusias) }}</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>c. Kreatifitas</td>
            <td style="text-align: end">2</td>
            <td style="text-align: end">{{$penilaian->penilaian_informal->kreativitas}}</td>
            <td style="text-align: center">{{ nilai123($penilaian->penilaian_informal->kreativitas) }}</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>d. Kedisiplinan</td>
            <td style="text-align: end">2</td>
            <td style="text-align: end">{{$penilaian->penilaian_informal->kedisiplinan}}</td>
            <td style="text-align: center">{{nilai123($penilaian->penilaian_informal->kedisiplinan)}}</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>e. Tanggung Jawab</td>
            <td style="text-align: end">2</td>
            <td style="text-align: end">{{$penilaian->penilaian_informal->tanggung_jawab}}</td>
            <td style="text-align: center">{{nilai123($penilaian->penilaian_informal->tanggung_jawab)}}</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>f. Komunikasi</td>
            <td style="text-align: end">2</td>
            <td style="text-align: end">{{$penilaian->penilaian_informal->komunikasi}}</td>
            <td style="text-align: center">{{nilai123($penilaian->penilaian_informal->komunikasi)}}</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>g. Etika dan Sopan Santun</td>
            <td style="text-align: end">2</td>
            <td style="text-align: end">{{$penilaian->penilaian_informal->etika_sopansantun}}</td>
            <td style="text-align: center">{{ nilai123($penilaian->penilaian_informal->etika_sopansantun) }}</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>h. Kecepatan, Ketepatan dan Kerapian</td>
            <td style="text-align: end">2</td>
            <td style="text-align: end">{{$penilaian->penilaian_informal->k3}}</td>
            <td style="text-align: center">{{ nilai123($penilaian->penilaian_informal->k3) }}</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td style="text-align: end"></td>
            <td style="text-align: end"></td>
            <td style="text-align: center"></td>
        </tr>
        <tr>
            <td colspan="4" style="text-align: center;font-weight: bold">Kesimpulan</td>
            <td style="text-align: center;font-weight: bold">Lulus</td>
            <td style="text-align: center;font-weight: bold">Tidak Lulus</td>
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
            <td colspan="2" style="font-weight: bold;font-style:italic">Catatan:</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td style="font-weight: bold;font-style:italic">3</td>
            <td colspan="2" style="font-weight: bold;font-style:italic">: Baik</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td style="font-weight: bold;font-style:italic">2</td>
            <td colspan="2" style="font-weight: bold;font-style:italic">: Cukup</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td style="font-weight: bold;font-style:italic">1</td>
            <td colspan="2" style="font-weight: bold;font-style:italic">: Kurang</td>
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
            <td>Penguji</td>
            <td></td>
            <td></td>
            <td>
                Siswa Praktikan
            </td>
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
            <td>{{ $penilaian->penilai->name }}</td>
            <td>
            </td>

            <td></td>
            <td>{{ $penilaian->siswa->nama }}
            </td>
            <td></td>
        </tr>
    </table>
</body>

</html>