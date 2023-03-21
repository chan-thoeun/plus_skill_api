<?php

namespace App\Http\Controllers\Api\auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use JWTAuth;

class AuthController extends Controller
{
    public function login(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        $user = User::where('email', $request->email)->first();
        if($user && Hash::check($request->password, $user->password)){
            if (! $token = JWTAuth::attempt($request->only('email','password'))) {
                return response()->json([
                    'error' => 'Unauthorized',
                    'token'=>$token
                ], 401);
            }
            $user->token = $token;
            return response(['data' => $user, "message" => "Login Success", 'status' =>  200]);
        } else {
            return response()->json(["message" =>'User does not exist'], 422);
        }
    }
    public function register(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|between:2,100',
            'email' => 'required|string|email|max:100|unique:users',
            'password' => 'required|confirmed|',
        ]);

        if($validator->fails()){
            return response()->json(['error'=>$validator->errors()->toJson()], 400);
        }
        
        $payload = [
            'name'     => $request->name,
            'password' => bcrypt($request->password),
            'email'    => $request->email,
            'roles'    => $request->role,
            'token'    => ''
        ];

        $user = User::create(array_merge($payload));
        if (! $token = JWTAuth::attempt($request->only('email','password'))) {
            return response()->json([
                'error' => 'Unauthorized',
                'token'=>$token
            ], 401);
        }
        $user = User::where('email', $request->email)->first();
        $user->token = $token; // update user token
        $user->save();
        return response()->json(['success' =>  200, 'message' => 'You are register successfully!!!.', 'data'=> $user]); 
    }
}
