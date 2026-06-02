<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;

use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use App\Models\TempImage;
use Intervention\Image\Drivers\Gd\Driver as GdDriver;
use Intervention\Image\Drivers\Imagick\Driver as ImagickDriver;
use Intervention\Image\ImageManager;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $services = Service::orderBy('created_at', 'DESC')->get();

        return response()->json([
            'status' => true,
            'data' => $services
        ]);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'slug' => 'required|unique:services,slug'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ]);
        }

        $model = new Service();
        $model->title = $request->title;
        $model->short_desc = $request->short_desc;
        $model->slug = Str::slug($request->slug);
        $model->content = $request->content;
        $model->status = $request->status;
        $model->save();

        return response()->json([
            'status' => true,
            'message' => 'Service added successfully'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $service = Service::find($id);

        if (!$service) {
            return response()->json([
                'status' => false,
                'message' => 'Service not found'
            ], 404);
        }

        return response()->json([
            'status' => true,
            'data' => $service
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Service $service)
    {
        // return response()->json([
        //     'status' => true,
        //     'data' => $service
        // ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $service = Service::find($id);

        if (!$service) {
            return response()->json([
                'status' => false,
                'message' => 'Service not found'
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'slug' => 'required|unique:services,slug,' . $id
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ]);
        }

        $tempImage = null;
        $sourcePath = null;

        if ($request->imageId > 0) {
            $tempImage = TempImage::find($request->imageId);

            if ($tempImage == null) {
                return response()->json([
                    'status' => false,
                    'message' => 'Temp image not found. Please upload image again.'
                ], 422);
            }

            $sourcePath = public_path('uploads/temp/' . $tempImage->name);

            if (!file_exists($sourcePath)) {
                return response()->json([
                    'status' => false,
                    'message' => 'Temp image file not found. Please upload image again.'
                ], 422);
            }
        }

        $service->title = $request->title;
        $service->short_desc = $request->short_desc;
        $service->slug = Str::slug($request->slug);
        $service->content = $request->content;
        $service->status = $request->status;
        $service->save();


        // Save Temp Image here
        if ($tempImage != null) {
            $extArray = explode('.', $tempImage->name);
            $ext = last($extArray);
            $fileName = strtotime('now') . $service->id . '.' . $ext;

            // Create small thumbnail here
            $smallPath = public_path('uploads/services/small');
            $largePath = public_path('uploads/services/large');

            if (!is_dir($smallPath)) {
                mkdir($smallPath, 0755, true);
            }

            if (!is_dir($largePath)) {
                mkdir($largePath, 0755, true);
            }

            $smallDestPath = $smallPath . '/' . $fileName;
            $largeDestPath = $largePath . '/' . $fileName;

            if (extension_loaded('gd')) {
                $manager = new ImageManager(GdDriver::class);

                $image = $manager->decodePath($sourcePath);
                $image->coverDown(500, 600);
                $image->save($smallDestPath);

                $image = $manager->decodePath($sourcePath);
                $image->scaleDown(1200);
                $image->save($largeDestPath);
            } elseif (extension_loaded('imagick')) {
                $manager = new ImageManager(ImagickDriver::class);

                $image = $manager->decodePath($sourcePath);
                $image->coverDown(500, 600);
                $image->save($smallDestPath);

                $image = $manager->decodePath($sourcePath);
                $image->scaleDown(1200);
                $image->save($largeDestPath);
            } else {
                copy($sourcePath, $smallDestPath);
                copy($sourcePath, $largeDestPath);
            }

            $service->image = $fileName;
            $service->save();
        }


        return response()->json([
            'status' => true,
            'message' => 'Service updated successfully'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $service = Service::find($id);

        if (!$service) {
            return response()->json([
                'status' => false,
                'message' => 'Service not found'
            ], 404);
        }

        $service->delete();

        return response()->json([
            'status' => true,
            'message' => 'Service deleted successfully'
        ]);
    }
}
