<?php

use Carbon\Carbon;

function nilaiTulisan($angka)
{
    if ($angka >= 86) {
        return "Sangat Kompeten";
    } elseif ($angka <= 85 and $angka >= 71) {
        return "Kompeten";
    } elseif ($angka <= 70 and $angka >= 61) {
        return "Cukup Kompeten";
    } elseif ($angka <= 61) {
        return "Belum Kompeten";
    }
}

function sumNilai($data, $column)
{
    return array_sum($data->map(function ($q) use ($column) {
        return $q->toArray()[$column];
    })->toArray());
}


function nilai123($nilai)
{
    switch ($nilai) {
        case 1:
            return "Kurang";
            break;

        case 2:
            return "Cukup";
            break;

        case 3:
            return "Baik";
            break;
        default:
            # code...
            break;
    }
}

function cekKelulusan($nilai){
    if($nilai<75){
        return "Tidak Lulus";
    }else{
        return "Lulus";
    }
}

function monthsBetweenDates($startDate, $endDate) {
    $start = Carbon::parse($startDate);
    $end = Carbon::parse($endDate);

    $months = $end->diffInMonths($start);

    return $months;
}


function classFromProject($startDate, $endDate){
    $year = monthsBetweenDates($startDate,$endDate) / 12;
    if($year <= 1 ){
        return "X";
    }else if($year <= 2 and $year > 1){
        return "XI";
    }else if($year <= 3 and $year > 2){
        return "XII";
    }
}

function toRoman($number) {
    $map = [
        'M' => 1000,
        'CM' => 900,
        'D' => 500,
        'CD' => 400,
        'C' => 100,
        'XC' => 90,
        'L' => 50,
        'XL' => 40,
        'X' => 10,
        'IX' => 9,
        'V' => 5,
        'IV' => 4,
        'I' => 1,
    ];

    $result = '';
    foreach ($map as $roman => $value) {
        $matches = intval($number / $value);
        $result .= str_repeat($roman, $matches);
        $number %= $value;
    }

    return $result;
}

function schoolYearFromSemesterAndEntry($semester, $entryDate){
    $chosseddate = Carbon::parse($entryDate)->addMonth($semester*6);

    $currentDate = $chosseddate;
    $startYear = $currentDate->month >= 9 ? $currentDate->year : $currentDate->year - 1;
    $endYear = $startYear + 1;
    return $startYear . ' - ' . $endYear;
}

function num2alpha($n) {
    $r = '';
    for ($i = 1; $n >= 0 && $i < 10; $i++) {
    $r = chr(0x41 + ($n % pow(26, $i) / pow(26, $i - 1))) . $r;
    $n -= pow(26, $i);
    }
    return strtolower($r);
}

function generateRandomString() {
    $length = rand(7,12);
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[random_int(0, $charactersLength - 1)];
    }
    return $randomString;
}