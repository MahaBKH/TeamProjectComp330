<?php
	$username = filter_input(INPUT_POST, 'username');
	$password = filter_input(INPUT_POST, 'password');

	if (!empty($username)) {
		if (!empty($password)) {
			// change these
			$host = "localhost";
			$dbusername = "ehoffman5";
			$dbpassword = "stPeter2012*";
			$dbname = "twitter-database";

			// Create connection
			$conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);

			if (mysqli_connect_error()) {
				die('Connect Error (' . mysqli_connect_errno() . ') ' . mysqli_connect_error());
			}
			else {
				$sql = "SELECT username, password FROM twitter-users";

				if ($conn->query($sql)) {
					echo "New record is inserted successfuly!";
				}
				else {
					echo "Error: " . $sql . "<br>" . $conn->error;
				}
				$conn->close();
			}
		}
		else {
			echo "Please enter a password.";
			die();
		}
	}
	else {
		echo "Please enter a username.";
		die();
	}

?>