<?php

use App\Exports\ExportRaportInformalNonformal;
use App\Http\Controllers\Angkatan\AngkatanController;
use App\Http\Controllers\DuniaIndustriController;
use App\Http\Controllers\ExportRaportController;
use App\Http\Controllers\FormPenilaianMagang\FormPenilaianMagangController;
use App\Http\Controllers\Jenis\JenisController;
use App\Http\Controllers\Jurusan\JurusanController;
use App\Http\Controllers\KloterDudiController;
use App\Http\Controllers\Login\LoginController;
use App\Http\Controllers\Pencarian\PencarianController;
use App\Http\Controllers\PenilaianMagang\PenilaianMagangController;
use App\Http\Controllers\PenilaianProjek\PenilaianProjekController;
use App\Http\Controllers\Penugasan\PenugasanController;
use App\Http\Controllers\Projek\ProjekController;
use App\Http\Controllers\Register\RegisterController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\Siswa\API_SiswaController;
use App\Http\Controllers\Siswa\SiswaController;
use App\Http\Controllers\SiswaMagangDudi\SiswaMagangDudi;
use App\Http\Controllers\SiswaMagangDudiController\SiswaMagangDudiController;
use App\Http\Controllers\SiswaMagangDudiController\SiswaMagangDudiController as SiswaMagangDudiControllerSiswaMagangDudiController;
use App\Http\Controllers\TemplateMagang\TemplateMagangController;
use App\Http\Controllers\Tugas\TugasController;
use App\Http\Controllers\UBJurusan\UBJurusanController;
use App\Http\Controllers\User\UserController;
use App\Http\Controllers\Versi\VersiController;

use App\Models\DuniaIndustri;
use App\Models\PenilaianMagang;
use App\Models\PenilaianProjek;
use App\Models\Penugasan;
use App\Models\UBJurusan;
use Illuminate\Auth\Events\Login;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use App\Models\Projek;
use App\Models\Siswa;
use Carbon\Carbon;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Http;
use Maatwebsite\Excel\Facades\Excel;

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
Route::resource('/duniaindustri', DuniaIndustriController::class);
Route::resource('/kloterdudi', KloterDudiController::class);
Route::resource('/siswamagangdudi', SiswaMagangDudiController::class);
Route::resource('/templatemagang', TemplateMagangController::class);
Route::resource("/formpenilaianmagang",FormPenilaianMagangController::class);
Route::resource("/penilaianmagang", PenilaianMagangController::class);
Route::get("/penilairaport", [SiswaController::class, "cetakraport"]);


Route::get("/gettaskboardstudent", [TugasController::class, "getTaskBoard"]);

Route::group(['middleware' => ['auth:student']], function () {
    Route::view('/pages/taskboard', "pages.taskboard.index");
    Route::view("/pages/profil", "pages.profil_akun_siswa.index");
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

    Route::get('/pages/projek/tugas/{id}', function ($id) {
        return view("pages.projek.index");
    });

    Route::get('/getcurrentauthuser', function () {
        return response()->json(Auth::user());
    })->name("user.authdata");

    Route::view('/pages/duniaindustri', "pages.dunia_industri.index");
});

Route::resource('pencarian', PencarianController::class);

Route::get("/danger/init", function () {
    Artisan::call("migrate:fresh");
    Artisan::call("db:seed");
});

Auth::routes();

//Login Siswa
Route::get('/loginsiswa', [LoginController::class, "index"])->name("siswa.login");
Route::post('/loginsiswa', [LoginController::class, "authenticate"])->name("siswa.login");
Route::get('/getcurrentauthsiswa', [LoginController::class, "getcurrentauthsiswa"])->name("siswa.authdata");
Route::post("/updatepp", [LoginController::class, "updatepp"]);
Route::put("/updateemailandpasswordsiswa", [LoginController::class, "updateemailandpasswordsiswa"]);


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
    $rolesName = Auth::user()->roles->pluck("name")->toArray();
    // dd($rolesName);
    if ($query->count() > 0 || in_array("Super Admin", $rolesName)) {
        return response()->json(true);
    } else {
        return response()->json(false);
    }
});

Route::prefix("api")->group(function () {
    Route::resource("siswa", API_SiswaController::class);
    Route::get("/issuperadmin", function () {
        return response()->json(Auth::user()->hasRole("Super Admin"));
    });
    Route::get('/checkguard', function () {
        if (Auth::guard("student")->check()) {
            return response()->json("student");
        } else {
            return response()->json("admin");
        }
    });
});


Route::get("/dangerzone/init", function () {
    Artisan::call("migrate:fresh");
    Artisan::call(("db:seed"));
    return redirect("/");
});

Route::get("/test-view", function () {
    $date = Carbon::now()->addMonth()->year;
    dd($date);
});

Route::post("/exportraport", [ExportRaportController::class, "download"]);

Route::view("/test", "output.output");


Route::view("/LPP", "output.lembar_penilaian_projek");



Route::get('/getdatasiswa', [API_SiswaController::class, "store"]);


Route::view("formpenilaian","pages.form_penilaian.index");


Route::get("/dudi/{url}",[FormPenilaianMagangController::class,"showpenilaian"]);
Route::post("/penilaianmagangpublik", [PenilaianMagangController::class,"store"] );

Route::get("/errorlink",[FormPenilaianMagangController::class,"showerror"]);