<?php namespace App\Controllers;

class Service extends BaseController
{
	public function index()
	{
		echo view('libraries/header');
		echo view('components/navbar');
		echo view('pages/service');
		echo view('libraries/footer');
	}

	//--------------------------------------------------------------------

}
