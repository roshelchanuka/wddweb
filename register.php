<?php
$servername = "localhost";
$username = "root";  // Change if needed
$password = "";      // Change if needed
$dbname = "user_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name = $_POST['name'];
$user = $_POST['username'];
$pass = password_hash($_POST['password'], PASSWORD_DEFAULT); // Secure password storage

// Insert user into database
$sql = "INSERT INTO users (name, username, password) VALUES ('$name', '$user', '$pass')";

if ($conn->query($sql) === TRUE) {
    echo "Registration successful! <a href='index.html'>Go Back</a>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
