<?php namespace App\Controllers;

class Portfolio extends BaseController
{
	public function index()
	{
		echo view('libraries/header');
		echo view('components/navbar');
		echo view('pages/portfolio');
		echo view('libraries/footer');
	}

	//--------------------------------------------------------------------

}
