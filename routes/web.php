<?php

use App\Http\Controllers\Angkatan\AngkatanController;
use App\Http\Controllers\Jenis\JenisController;
use App\Http\Controllers\Jurusan\JurusanController;
use App\Http\Controllers\Login\LoginController;
use App\Http\Controllers\Penugasan\PenugasanController;
use App\Http\Controllers\Projek\ProjekController;
use App\Http\Controllers\Register\RegisterController;
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
    return view('layout.layout');
})
// ->middleware('auth')
;

Route::get('/konfigurasiangkatan', function () {
    return view('pages.konfigurasi.components.konfigurasi_angkatan_view');
});
Route::get('/card', function () {
    return view('pages.projek.components.tugas_detail_view');
});

Route::get('/login',[LoginController::class, 'index'])->name('login')
// ->middleware('guest')
;
Route::post('/login',[LoginController::class, 'authenticate']);
Route::post('/logout',[LoginController::class, 'logout']);

Route::get('/register', [RegisterController::class, 'index'])
// ->middleware('guest')
;
Route::post('/register', [RegisterController::class, 'store']);

Route::resource('/projek', ProjekController::class);
Route::resource('/versi', VersiController::class);
Route::resource('/jenis', JenisController::class);
Route::resource('/jurusan', JurusanController::class);
Route::resource('/tugas', TugasController::class);
Route::resource('/penugasan', PenugasanController::class);
Route::resource('/angkatan', AngkatanController::class);
Route::resource('/siswa', SiswaController::class);

Route::view('/pages/projek', "pages.projek.index");
Route::view('/pages/dashboard', "pages.dashboard.index");
Route::view('/pages/taskboard', "pages.taskboard.components.taskboard");

