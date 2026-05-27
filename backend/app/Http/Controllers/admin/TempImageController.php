<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\TempImage;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver as GdDriver;
use Intervention\Image\Drivers\Imagick\Driver as ImagickDriver;


class TempImageController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'image' => 'required|mimes:png,jpg,jpeg,gif'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors('image')
            ]);
        }

        $image = $request->image;

        $ext = $image->getClientOriginalExtension();
        $imageName = strtotime('now') . '.' . $ext;

        // Save image info to database
        $model = new TempImage();
        $model->name = $imageName;
        $model->save();

        // Move the uploaded image to the desired location
        $image->move(public_path('uploads/temp'), $imageName);

        // Create small thumbnail here
        $sourcePath = public_path('uploads/temp/' . $imageName);
        $destPath = public_path('uploads/temp/thumb/' . $imageName);

        if (!is_dir(public_path('uploads/temp/thumb'))) {
            mkdir(public_path('uploads/temp/thumb'), 0755, true);
        }

        if (extension_loaded('gd')) {
            $manager = new ImageManager(GdDriver::class);
            $image = $manager->decodePath($sourcePath);
            $image->coverDown(300, 300);
            $image->save($destPath);
        } elseif (extension_loaded('imagick')) {
            $manager = new ImageManager(ImagickDriver::class);
            $image = $manager->decodePath($sourcePath);
            $image->coverDown(300, 300);
            $image->save($destPath);
        }


        return response()->json([
            'status' => true,
            'data' => $model,
            'message' => 'Image uploaded successfully.'
        ]);
    }
}
