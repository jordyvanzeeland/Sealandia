<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Module;
use JWTAuth;

class ModulesController extends Controller
{
    public function getModules(Request $request)
    {
        $authorizationHeader = $request->header('Authorization');

        if($authorizationHeader){
            try {
                $user = auth()->userOrFail();

                if($user){
                    $modules = Module::all();
                    return $modules;
                }else{
                    return response()->json(['error' => 'No user found'], 401);
                }
            } catch (\Tymon\JWTAuth\Exceptions\UserNotDefinedException $e) {
                return response()->json(['error' => 'No user found'], 401);
            }
        }else{
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        
    }

    public function getModule(Request $request, $id)
    {
        $authorizationHeader = $request->header('Authorization');

        if($authorizationHeader){
            try {
                $user = auth()->userOrFail();

                if($user){
                    $module = Module::find($id);
                    return $module;
                }else{
                    return response()->json(['error' => 'No user found'], 401);
                }
            } catch (\Tymon\JWTAuth\Exceptions\UserNotDefinedException $e) {
                return response()->json(['error' => 'No user found'], 401);
            }
        }else{
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        
    }
}
