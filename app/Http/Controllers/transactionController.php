<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Carbon;
use App\Models\Transaction;

class transactionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {
            $address = $request->get('address');
            $perPage = $request->get('per_page');
            $transaction = Transaction::where('owner_address',  $address)
                                        ->whereDate('created_at', '=', \Carbon\Carbon::today())
                                        ->latest()->paginate($perPage);
            return response()->json([
                'data'    => $transaction,
                'status'  => 'success', 
            ], 200, [],JSON_NUMERIC_CHECK);
        } catch (\Exception $ex) {
            return response()->json([
                'message' => $ex->getMessage(),
                'status'  => 'success', 
            ], 400);
        }
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
        // return response()->json([$request->all()]);
        $validator  = Validator::make($request->all(), [
            'owner_address'    => 'required',
            'transaction_hash' => 'required',
            'from'             => 'required',
            'to'               => 'required',
            'token_value'      => 'required',
            'gas_price'        => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        Transaction::create([
            'owner_address'    => $request->owner_address,
            'transaction_hash' => $request->transaction_hash,
            'from'             => $request->from,
            'to'               => $request->to,
            'token_value'      => $request->token_value,
            'gas_price'        => $request->gas_price,
            'type'             => $request->type,
            'status'           => $request->status,
        ]);
        return response()->json([
            'message' => 'Transaction Added Successfully.', 
            'status'  => 'success'
        ], 201); 
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
}
