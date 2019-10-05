<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\SubCategory;
use Exception;

class SubCategoryController extends Controller
{
    function getSubCategories()
    {
        try {
            $subCategories = SubCategory::all();
            return json_encode($subCategories);
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }
}
