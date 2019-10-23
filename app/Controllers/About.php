<?php namespace App\Controllers;

class About extends BaseController
{
	public function index()
	{
		echo view('libraries/header');
		echo view('components/navbar');
		echo view('pages/about');
		echo view('libraries/footer');
	}

	//--------------------------------------------------------------------

}
