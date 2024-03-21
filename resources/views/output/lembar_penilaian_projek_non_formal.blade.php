<!DOCTYPE html>

<html lang="en">



<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>{{$pageNumber}} - Non Formal</title>

    <style>



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

            <td colspan="6" align="center" style="font-weight: bold; font-family:'Times New Roman', Times, serif">LEMBAR PENILAIAN PROJECT

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

            <td style="font-family:'Times New Roman', Times, serif">Nama Project</td>

            <td></td>

            <td style="font-family:'Times New Roman', Times, serif">: {{$penilaian->tugas->projek->nama}}</td>

            <td></td>

            <td></td>

            <td></td>

        </tr>

        <tr>

            <td style="font-family:'Times New Roman', Times, serif">Lokasi Projek</td>

            <td></td>

            <td style="font-family:'Times New Roman', Times, serif">: {{$penilaian->tugas->projek->lokasi}}</td>

            <td></td>

            <td></td>

            <td></td>

        </tr>

        <tr>

            <td style="font-family:'Times New Roman', Times, serif">Kompetensi</td>

            <td></td>

            <td style="font-family:'Times New Roman', Times, serif">: {{$penilaian->tugas->nama}}</td>

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

            <td style="font-family:'Times New Roman', Times, serif;font-size: 11pt;font-weight:bold;border: 1px solid black;text-align:center;background: #F2F2F2; " valign="center">No</td>
            <td style="font-family:'Times New Roman', Times, serif;font-size: 11pt;font-weight:bold;border: 1px solid black;text-align:center;background: #F2F2F2; " valign="center">Aspek</td>
            <td style="font-family:'Times New Roman', Times, serif;font-size: 11pt;font-weight:bold;border: 1px solid black;text-align:center;background: #F2F2F2; " valign="center">Indikator</td>
            <td style="font-family:'Times New Roman', Times, serif;font-size: 11pt;font-weight:bold;border: 1px solid black;text-align:center;background: #F2F2F2; " valign="center">Skor Max</td>
            <td style="font-family:'Times New Roman', Times, serif;font-size: 11pt;font-weight:bold;border: 1px solid black;text-align:center;background: #F2F2F2; " valign="center">Skor yang dicapai</td>
            <td style="font-family:'Times New Roman', Times, serif;font-size: 11pt;font-weight:bold;border: 1px solid black;text-align:center;background: #F2F2F2; " valign="center">Keterangan</td>

        </tr>

        @php
            $totalNilaiMax = 0;
            $totalNilaiCapai = 0;
        @endphp

        @foreach($penilaian->penilaian_non_formal as $i=> $p)





        <tr style="font-family:'Times New Roman', Times, serif;font-weight:bold">

            @if($i == 0)

            <td rowspan="{{$penilaian->penilaian_non_formal->count()}} " style="border: 1px solid black; font-family: 'Times New Roman', Times, serif;text-align:end">1</td>

            <td rowspan="{{$penilaian->penilaian_non_formal->count()}}" style="border: 1px solid black; font-family: 'Times New Roman', Times, serif">Hasil Kerja</td>

            @endif

            <td style="border: 1px solid black; font-family: 'Times New Roman', Times, serif">{{num2Alpha($i).". ".$p->indikator->nama}}</td>
            <td style="border: 1px solid black; font-family: 'Times New Roman', Times, serif;text-align:right">{{$p->indikator->nilai_max}}</td>
            <td style="border: 1px solid black; font-family: 'Times New Roman', Times, serif;text-align:right">{{$p->nilai}}</td>

            <td style="border: 1px solid black; font-family: 'Times New Roman', Times, serif"></td>

            @php
                $totalNilaiMax += $p->indikator->nilai_max;
                $totalNilaiCapai  += $p->nilai;
            @endphp

        </tr>





        @endforeach



        <tr>

            <td style="font-family:'Times New Roman', Times, serif;font-weight:bold; border: 1px solid black">Jumlah Skor Maksimal</td>

            <td style="border: 1px solid black; font-family: 'Times New Roman', Times, serif"></td>

            <td style="border: 1px solid black; font-family: 'Times New Roman', Times, serif"></td>

            <td style="font-family:'Times New Roman', Times, serif;font-weight:bold;border: 1px solid black;text-align:right">{{ $totalNilaiMax}}</td>

            <td style="font-family:'Times New Roman', Times, serif;font-weight:bold;border: 1px solid black;text-align:right"> {{$totalNilaiCapai}}</td>

            <td style="font-family:'Times New Roman', Times, serif;font-weight:bold;border: 1px solid black;text-align:center">{{cekKelulusan($totalNilaiCapai)}}</td>
text-align:right
        </tr>
        <tr>

            <td style="font-family:'Times New Roman', Times, serif;font-weight:bold;border: 1px solid black">Kriteria Ketuntasan Minimal</td>
            <td style="font-family:'Times New Roman', Times, serif;font-weight:bold;border: 1px solid black"></td>
            <td style="font-family:'Times New Roman', Times, serif;font-weight:bold;border: 1px solid black"></td>
            <td style="font-family:'Times New Roman', Times, serif;font-weight:bold;border: 1px solid black; text-align:right">75</td>
            <td style="border: 1px solid black; font-family: 'Times New Roman', Times, serif" ></td>
            <td style="border: 1px solid black; font-family: 'Times New Roman', Times, serif"></td>

        </tr>
        <tr>

            <td colspan="4"   style="text-align:center;font-weight: bold; font-size: 11pt;border:1px solid black; border: 1px solid black;font-family: 'Times New Roman', Times, serif">Kesimpulan</td>
            <td style="text-align:center;font-weight: bold; font-size: 11pt;border:1px solid black; border: 1px solid black;font-family: 'Times New Roman', Times, serif">Lulus</td>
            <td style="text-align:center;font-weight: bold; font-size: 11pt;border:1px solid black; border: 1px solid black;font-family: 'Times New Roman', Times, serif">Tidak Lulus</td>

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

            <td colspan="2" style="font-size: 11pt;font-family:'Times New Roman', Times, serif">
                Semarang, {{date("j F Y",strtotime($penilaian->created_at)) }}
            </td>

        </tr>

        <tr>

            <td></td>

            <td style="font-family: 'Times New Roman', Times, serif">Penguji</td>
            <td></td>

            

            <td></td>

            <td style="font-family: 'Times New Roman', Times, serif;">

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
            <td style="font-family: 'Times New Roman', Times, serif">{{ $penilaian->penilai->name }}</td>

            <td>

            </td>

           

            <td></td>

            <td style="font-family: 'Times New Roman', Times, serif">{{ $penilaian->siswa->nama }}

            </td>

            <td></td>

        </tr>

    </table>

</body>



</html>