<?php

use App\Http\Controllers\Angkatan\AngkatanController;
use App\Http\Controllers\Jenis\JenisController;
use App\Http\Controllers\Jurusan\JurusanController;
use App\Http\Controllers\Penugasan\PenugasanController;
use App\Http\Controllers\Projek\ProjekController;
use App\Http\Controllers\Siswa\SiswaController;
use App\Http\Controllers\Tugas\TugasController;
use App\Http\Controllers\Versi\VersiController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/index', function () {
    return view('layout.index');
});

// route utk ke projek
Route::get('/projekpplg', function () {
    return view('pages/projek/pplg/projekpplg');
});
Route::get('/projektkp', function () {
    return view('pages/projek/tkp/projektkp');
});
Route::get('/projekkuliner', function () {
    return view('pages/projek/kuliner/projekkuliner');
});
Route::get('/projekdkv1', function () {
    return view('pages/projek/dkv1/projekdkv1');
});
Route::get('/projekdkv2', function () {
    return view('pages/projek/dkv2/projekdkv2');
});
Route::get('/projektkro', function () {
    return view('pages/projek/tkro/projektkro');
});

// route tuk ke detailprojek
Route::get('/detailprojekpplg', function () {
    return view('pages/projek/pplg/detailprojekpplg');
});
Route::get('/detailprojektkp', function () {
    return view('pages/projek/tkp/detailprojektkp');
});
Route::get('/detailprojekkuliner', function () {
    return view('pages/projek/kuliner/detailprojekkuliner');
});
Route::get('/detailprojekdkv1', function () {
    return view('pages/projek/dkv1/detailprojekdkv1');
});
Route::get('/detailprojekdkv2', function () {
    return view('pages/projek/dkv2/detailprojekdkv2');
});
Route::get('/detailprojektkro', function () {
    return view('pages/projek/tkro/detailprojektkro');
});




Route::resource('/projek', ProjekController::class);
Route::resource('/versi', VersiController::class);
Route::resource('/jenis', JenisController::class);
Route::resource('/jurusan', JurusanController::class);
Route::resource('/tugas', TugasController::class);
Route::resource('/penugasan', PenugasanController::class);
Route::resource('/angkatan', AngkatanController::class);
Route::resource('/siswa', SiswaController::class);

