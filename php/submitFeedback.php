<!DOCTYPE html>
<html>
<head>
	<title>Ahandar Feedback</title>
	<meta charset="UTF-8"/>
</head>
<body>
	
	<?php

	if (!empty($_GET["username"]) && !empty($_GET["feedbackNote"])) { //if username is empty > error
		$productParam = $_GET["pNameToPHP"];
		$username = htmlspecialchars($_GET["username"]);
		$comment = htmlspecialchars($_GET["comment"]);
		$note = htmlspecialchars($_GET["feedbackNote"]);

		//get JSON data
		$url = '../json/data-products.json';
		$json = file_get_contents($url);
		$data = json_decode($json, true);

		//push feedback to database
		array_push($data[$productParam][0]["evaluation"], array(
			"user"=>$username,
			"comment"=>$comment,
			"note"=>$note));

		//save JSON file
		file_put_contents('../json/data-products.json', json_encode($data, JSON_PRETTY_PRINT));

		//message + index button
		echo "<p>Merci de votre feedback " . $username . " !</p>";
		echo "<h2>Avis enregistré.</h2>";
		echo "<form action='../index.html'><button> >Revenir à l'accueil< </button></form>";
	}
	else {
		echo "<h2>Erreur. Vous devez spécifier un nom et une note</h2>";
	}

	?>

</body>
</html>