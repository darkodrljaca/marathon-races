<?php

namespace App\Http\Controllers;

use App\Models\Race;

class RaceController extends Controller {

    public function index() {                
        
        return Race::all();

    }


}