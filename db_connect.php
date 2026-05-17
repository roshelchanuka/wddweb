<?php
$host = "localhost";  // Change this if you're using a different host
$username = "root";   // Default user for XAMPP/MAMP/LAMP
$password = "";       // Default is empty for XAMPP
$database = "customer_support";  // Your database name

// Create connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
