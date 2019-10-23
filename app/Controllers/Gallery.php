<?php namespace App\Controllers;

class Gallery extends BaseController
{
	public function index()
	{
		echo view('libraries/header');
		echo view('components/navbar');
		echo view('pages/gallery');
		echo view('libraries/footer');
	}

	//--------------------------------------------------------------------

}
