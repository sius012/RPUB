<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index()
    {
        $user = User::all();
        $user = $user->map(function ($e) {
            $e->rolesStr = implode(",", $e->roles->pluck("name")->toArray());
            return $e;
        });
        return response()->json($user);
    }


    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Models\User
     */
    protected function store(Request $req)
    {
        $data = $req->input();
        $user =  User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        $user->assignRole("Admin");
    }

    public function show($id)
    {
        $user = User::find($id);
        $user->rolesStr = implode(",", $user->roles->pluck("name")->toArray());
        return response()->json($user);
    }
}
