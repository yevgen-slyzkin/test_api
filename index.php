<?php
$data = file_get_contents('data.json');
$countries = json_decode($data, true);
//var_dump($data);
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Coutries</title>

</head>
<body>
<div class="wrapper text-center">
	<table id="main-table">
		<thead>
		<tr>
			<td data-elem="0" class="sort">ID</td>
			<td data-elem="1" class="sort">Name</td>
			<td data-elem="2" class="sort">Code</td>
		</tr>
		</thead>
		<tbody>

		</tbody>
	</table>
</div>


<link href="assets/css/main.css" rel="stylesheet" type="text/css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
<script src="assets/js/main.js"></script>
</body>
</html>
