<?php 

	$myEmail = "lucas.fauchier@etu.univ-amu.fr";

	$name = htmlspecialchars($_POST['name']);
	$email = htmlspecialchars($_POST['email']);
	$message = htmlspecialchars($_POST['message']);

	mail($myEmail, "Nouveau message depuis le site", "Message de : " . $name . " (".$email.")<br>".$message);

 ?>