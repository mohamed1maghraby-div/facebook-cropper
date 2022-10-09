<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CropperController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [CropperController::class, 'cropper']);
/* <form method="post">
    <input type="file" name="file" /><br/>
    <input type="submit" name="" value="upload" />
</form> */