<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8"/>
	<title>Products PHP</title>
</head>
<body>
	Votre réponse est donc:
	<?php echo $_GET["q"]; ?>


	<?php

	$url = 'json/data-products.json';
	$json = file_get_contents($url);
	$data = json_decode($json);

	foreach($data in $data) {
		echo $data[0]->name;
	}

	?>

</body>
</html>