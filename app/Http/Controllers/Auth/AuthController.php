<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request){
        $validator  = Validator::make($request->all(), [
            'phone'    => 'required',
            'password' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        $user = User::where('phone', $request->phone)->first();
        if ($user) {
            if (Hash::check($request->password, $user->password)) {
                $token = $user->createToken('Laravel Password Grant Client')->accessToken;
                $user->token = $token;
                return response([
                    'data'     => $user, 
                    "message"  => "Login Successfully", 
                    'status'   => 'success',
                ], 200);
            }
        } else {
            return response()->json([
                "message" =>'User does not exist',
                'status'  => 'error',
            ], 422);
        }
    }
    public function register(Request $request){
        $validator = Validator::make($request->all(), [
            'name'     => 'required|string|between:2,100',
            'phone'    => 'required',
            'password' => 'required|confirmed|min:6',
        ]);
        if($validator->fails()){
            return response()->json(['error '=> $validator->errors()->toJson()], 400);
        }
        $user = User::create([
            'name'     => $request->name,
            'phone'    => $request->phone,
            'password' => bcrypt($request->password),
            'role_as'  => $request->role_as,
        ]);
        $token = $user->createToken('Laravel Password Grant Client')->accessToken;
        $user->token = $token;
        return response()->json([
            'data'     => $user,
            'message'  => 'You are register successfully!.', 
            'status'   => 'success',
        ], 200);
    }
}
