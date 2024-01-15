<?php

namespace App\Http\Controllers\Login;

use App\Http\Controllers\Controller;
use App\Models\Siswa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('pages.auth.login_siswa', [
            // 'title' => "Login"
        ]);
    }

    public function authenticate(Request $request)
    {


        // $credentials = $request->validate([
        //     'email' => 'required|email:dns',
        //     'password' => 'required'
        // ]);
        $credentials = [
            "email" => $request->email,
            "password" => $request->password
        ];


        if (Auth::guard("student")->attempt($credentials)) {
            $request->session()->regenerate();
            return redirect()->intended('/pages/taskboard');
        }

        return back()->withErrors('loginError', 'Login failed!');
    }

    public function logout(Request $request)
    {
        Auth::logout();

        request()->session()->invalidate();

        request()->session->regenerateToken();

        return redirect('/index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function getcurrentauthsiswa()
    {
        $accountId = Auth::guard("student")->user()->id;
        $account = Siswa::with(["angkatan", "jurusan"])->find($accountId);
        $account->kelasDanJurusan =  $account->angkatan->kelas() . " " . $account->jurusan->jurusan;
        return response()->json($account);
    }

    public function updatepp(Request $req)
    {
        $siswa = Siswa::find($req->id);

        if ($req->hasFile("pp_img")) {
            if ($siswa->fotoprofil != "default.jpg" and $siswa->fotoprofil != null) {
                unlink(public_path("/img/profilsiswa/" . $siswa->fotoprofil));
            }
            $imageName =  'pp_' . $siswa->nama . "_" . date("dmyhis") . ".png";
            $req->pp_img->move(public_path('img/profilsiswa'), $imageName);
            $siswa->fotoprofil = $imageName;
            $siswa->save();
        }
    }

    public function updateemailandpasswordsiswa(Request $req)
    {
        $siswa = Siswa::find(Auth::guard('student')->user()->id);

        //check apakah email ada yang sama
        $query = Siswa::where("email", $req->email)->get();
        if ($query->count() > 0) {
            return response()->json(["response" => "error"]);
        } else {
            $siswa->email = $req->email;

            if (strlen($req->password) >= 8) {
                $siswa->password = Hash::make($req->password);
            }
            $siswa->save();
            return response()->json(["response" => "success"]);
        }
    }
}
