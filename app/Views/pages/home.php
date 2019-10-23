<div id="colorlib-page">
	<?php
		echo view('components/navbar');
		echo view('components/about');
		echo view('components/education');
		echo view('components/service');
		echo view('components/portfolio');
		echo view('components/gallery');
		echo view('components/quotes');
		echo view('components/footer');
	?>
</div>
<?php echo view('style/style'); // echo view('style/style2'); ?>
<style>
	.row.pagination {
		display: none;
	}
</style>
