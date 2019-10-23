<?php namespace App\Controllers;

class Home extends BaseController
{
	public function index()
	{
		echo view('libraries/header');
		echo view('components/navbar');
		echo view('pages/quotes');
		echo view('libraries/footer');
	}

	//--------------------------------------------------------------------

}
