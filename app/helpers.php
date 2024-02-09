<?php


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
