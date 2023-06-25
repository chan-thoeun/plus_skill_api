<?php

namespace App\Http\Controllers\Api\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:100',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        $user = User::where('email', $request->email)->first();
        if ($user) {
            if (Hash::check($request->password, $user->password)) {
                $token = $user->createToken('Laravel Password Grant Client')->accessToken;
                $user->token = $token;
                return response(['data' => $user, "message" => "Login Success", 'status' =>  200]);
            }
        } else {
            return response()->json(["message" =>'User does not exist'], 422);
        }
    }
    public function register(Request $request){
        $validator = Validator::make($request->all(), [
            'name'     => 'required|string|between:2,100',
            'email'    => 'required|string|email|max:100|unique:users',
            'password' => 'required',
        ]);
        if($validator->fails()){
            return response()->json(['error'=>$validator->errors()->toJson()], 400);
        }
        $payload = [
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => bcrypt($request->password),
            'roles'    => $request->role,
            'terms'    => $request->terms
        ];
        $user = User::create(array_merge($payload));
        $token = $user->createToken('Laravel Password Grant Client')->accessToken;
        $user->token = $token;
        return response()->json(['data'=> $user,'message' => 'You are register successfully!.','status' =>  200]); 
    }
}
