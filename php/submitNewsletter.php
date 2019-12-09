<!DOCTYPE html>
<html>
<head>
	<title>Ahandar Newsletter</title>
	<meta charset="UTF-8"/>
</head>
<body>

	<?php

	$email = $_GET["newletterInput"];

	if (!empty($email)) {

		//get JSON data
		$url = '../json/data-newsletter.json';
		$json = file_get_contents($url);
		$data = json_decode($json, true);

		//push email to database
		array_push($data, array(
			"email"=>$email,
			"subscription"=>"full"));

		//save JSON file
		file_put_contents('../json/data-newsletter.json', json_encode($data, JSON_PRETTY_PRINT));

		//message + index button
		echo "<p>Vous avez bien été inscrit à l'adresse e-mail: " . $email . " !</p>";
		echo "<form action='../index.html'><button> >Revenir à l'accueil< </button></form>";

	} else {
		echo "<p>Erreur. Aucune adresse e-mail spécifiée.</p>";
	}

	?>
</body>
</html>
