<?php

use App\Http\Controllers\Angkatan\AngkatanController;
use App\Http\Controllers\Jenis\JenisController;
use App\Http\Controllers\Jurusan\JurusanController;
use App\Http\Controllers\Login\LoginController;
use App\Http\Controllers\PenilaianProjek\PenilaianProjekController;
use App\Http\Controllers\Penugasan\PenugasanController;
use App\Http\Controllers\Projek\ProjekController;
use App\Http\Controllers\Register\RegisterController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\Siswa\SiswaController;
use App\Http\Controllers\Tugas\TugasController;
use App\Http\Controllers\UBJurusan\UBJurusanController;
use App\Http\Controllers\User\UserController;
use App\Http\Controllers\Versi\VersiController;
use App\Models\PenilaianProjek;
use App\Models\Penugasan;
use App\Models\UBJurusan;
use Illuminate\Auth\Events\Login;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use App\Models\Projek;

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
    return view('auth.login');
});

    // ->middleware('auth')
;

Route::get('/konfigurasiangkatan', function () {
    return view('pages.konfigurasi.components.konfigurasi_angkatan_view');
});
Route::get('/card', function () {
    return view('pages.projek.components.tugas_detail_view');
});

Route::get('/login', [LoginController::class, 'index'])->name('login')
    // ->middleware('guest')
;
Route::post('/login', [LoginController::class, 'authenticate']);
Route::post('/logout', [LoginController::class, 'logout']);

Route::get('/register', [RegisterController::class, 'index'])
    // ->middleware('guest')
;
Route::post('/register', [RegisterController::class, 'store']);

Route::resource('/projek', ProjekController::class);
Route::resource('/versis', VersiController::class);
Route::resource('/jenis', JenisController::class);
Route::resource('/jurusan', JurusanController::class);
Route::resource('/tugas', TugasController::class);
Route::resource('/penugasan', PenugasanController::class);
Route::resource('/angkatan', AngkatanController::class);
Route::resource('/siswa', SiswaController::class);
Route::resource('/user', UserController::class);
Route::resource('/ubjurusan', UBJurusanController::class);
Route::resource('/role', RoleController::class);
Route::resource('/penilaianprojek', PenilaianProjekController::class);

Route::get("/penilairaport", [SiswaController::class, "cetakraport"]);


Route::get("/gettaskboardstudent", [TugasController::class, "getTaskBoard"]);

Route::group(['middleware' => ['auth:student']], function () {
    Route::view('/pages/taskboard', "pages.taskboard.index");
});

Route::group(['middleware' => ['role:Admin|Super Admin']], function () {
    Route::view('/pages/projek', "pages.projek.index");

    Route::view('/pages/dashboard', "pages.dashboard.index");
    Route::view('/pages/konfigurasi', "pages.konfigurasi.index");


    Route::view('/pages/siswa', "pages.siswa.index");
    Route::get('/pages/siswa/{jurusan}/{angkatan}/{id}', function ($jurusan, $angkatan, $id) {
        return view("pages.siswa.index");
    });


    Route::get('/pages/projek/{id}', function ($id) {
        return view("pages.projek.index");
    });
});



Auth::routes();

//Login Siswa
Route::get('/loginsiswa', [LoginController::class, "index"])->name("siswa.login");
Route::post('/loginsiswa', [LoginController::class, "authenticate"])->name("siswa.login");
Route::get('/getcurrentauthsiswa', [LoginController::class, "getcurrentauthsiswa"])->name("siswa.authdata");

Route::get('/teshash', function () {
    dd(Hash::make("password"));
});
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


//MiddleWare
Route::get('/checkubjurusan/{id}', function ($id) {
    $query = UBJurusan::where("id_pengguna", Auth::user()->id)->pluck("id_jurusan")->toArray();
    if (in_array($id, $query)) {
        return true;
    } else {
        return false;
    }
});

Route::get("/permissionprojek/{id}", function ($id) {
    $query = Projek::where("id", $id)->whereHas("projek_jurusan.jurusan.ub_jurusan", function ($q) {
        $q->where("id_pengguna", Auth::user()->id);
    })->get();
    if ($query->count() > 0) {
        return response()->json(true);
    } else {
        return response()->json(false);
    }
});

Route::view("/test", "output.output");
