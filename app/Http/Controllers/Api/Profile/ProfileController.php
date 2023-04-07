<?php

namespace App\Http\Controllers\Api\Profile;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use File;
use App\Models\User;
use App\Models\Profile;

class ProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, $id)
    {
        //
      
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
    public function store(Request $request, $id)
    {
        
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
        $user = Profile::where('user_id', $id)->first();
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
        // validator user
        $validator = Validator::make($request->all(), [
           'name'     => 'required|string|max:10',
           'email'    => 'required|string|email|max:50',
       ]);
       $user = User::findOrFail($id);
       if ($validator->fails()){
           return response(['failed'=>$validator->errors()->all()], 422);
       }
       $userData = array(
           "name"  => $request->name,
           "email" => $request->email,
       );
       $dataRequst = array(
           "gender"        => $request->gender,
           "phone"         => $request->phone,
           "date_of_birth" => $request->date_of_birth,
           "address"       => $request->address,
           "photo"         => $photo,
           "twitter"       => $request->twitter,
           "facebook"      => $request->facebook,
           "linkedin"      => $request->linkedin,
           "youtube"       => $request->youtube,
           "status"        => $request->status,
       );
       $user->update($userData);
        DB::table('profiles')->updateOrInsert(
            ['user_id' => $id],$dataRequst
        );
       return response([ "message" => "Add sucess", 'status' =>  200]);   
    }
    //uoload profile
    public function uploadphoto(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'photo'  => 'required',
        ]);
        if ($validator->fails()){
            return response(['failed'=>$validator->errors()->all()], 422);
        }
        $photo = '';
        if ($request->hasFile('photo'))
        {
            $file      = $request->file('photo');
            $filename  = $file->getClientOriginalName();
            $extension = $file->getClientOriginalExtension();
            $photo   = date('His').'-'.$filename;
            $file->move(public_path('upload'), $photo);
        }
        $dataRequst = array(
            "photo"  => $photo
        );
     
        DB::table('profiles')->updateOrInsert(
            ['user_id' => $id],$dataRequst
        );
        return response()->json([ "message" => "Add sucess", 'status' =>  200]);   
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
}
