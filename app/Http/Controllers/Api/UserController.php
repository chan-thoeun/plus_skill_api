<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Auth;
use File;
use App\Models\User;
use App\Models\Profile;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = User::with('profile')->first();
        return response()->json(["data" => $user]);
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
        $validator = Validator::make($request->all(), [
            'name'     => 'required|string|max:10',
            'email'    => 'required|string|email|max:50',
        ]);
        if ($validator->fails()){
            return response(['failed'=>$validator->errors()->all()], 422);
        }
        User::create([
            "gender"        => $request->gender,
            "phone"         => $request->phone,
            "dob"           => $request->dob,
            "about"         => $request->about,
            "address"       => $request->address,
            "twitter"       => $request->twitter,
            "facebook"      => $request->facebook,
            "linkedin"      => $request->linkedin,
            "youtube"       => $request->youtube,
            "status"        => $request->status,
        ]);
        return response()-json([ "message" => "Create User Sucess", 'status' =>  200]); 
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
        $user = User::with('profile')->where('id', $id)->first();
        return response()->json(['data'=> $user]);
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
        $validator = Validator::make($request->all(), [
           'name'     => 'required|string|max:10',
           'email'    => 'required|string|email|max:50',
       ]);
       if ($validator->fails()){
           return response(['failed'=>$validator->errors()->all()], 422);
       }
        $user = User::findOrFail($id);
        $user->update([
            "name"  => $request->name,
            "email" => $request->email,
        ]);
        $user->profile()->updateOrCreate(
            [
                'user_id' => $id,
            ],
            [
                "gender"        => $request->gender,
                "phone"         => $request->phone,
                "dob"           => $request->dob,
                "about"         => $request->about,
                "address"       => $request->address,
                "twitter"       => $request->twitter,
                "facebook"      => $request->facebook,
                "linkedin"      => $request->linkedin,
                "youtube"       => $request->youtube,
                "status"        => $request->status,
            ]
        );
        return response([ "message" => "Create User Sucess", 'status' =>  200]); 
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
    //upload profile
    public function upload(Request $request)
    {
        $validator   = Validator::make($request->all(), [
            'image'  => 'required'
        ]);
        if ($validator->fails()){
            return response(['failed'=>$validator->errors()->all()], 422);
        }
        $user = User::with('profile')->where('id', Auth::guard('api')->user()->id)->first();
        $image = '';
        if ($request->hasFile('image')){
            $image = $this->uploadImage($request->file('image'));
            if(!empty($user->profile->image)){
                $this->removeExistImage($user->profile->image);
            }
        }else{
            $image =  $user->profile->image;
        }
        $user->profile()->updateOrCreate(
            [
                'user_id' => Auth::guard('api')->user()->id,
            ],
            [
                "image"   =>  $image
            ]
        );
        return response()->json([ "message" => "Upload Image Sucess", 'status' =>  200]);   
    }
}
