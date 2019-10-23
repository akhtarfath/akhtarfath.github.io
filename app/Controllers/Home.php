<?php namespace App\Controllers;

class Home extends BaseController
{
	public function index()
	{
		echo view('libraries/header');
		echo view('components/navbar');
		echo view('pages/home');
		echo view('libraries/footer');
	}

	//--------------------------------------------------------------------

}
