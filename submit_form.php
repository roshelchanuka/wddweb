<?php
header("Location: thank_you.html");
exit();

include 'db_connect.php'; // Include database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $reason = $_POST['reason'];
    $message = $_POST['message'];

    // Prevent SQL Injection
    $stmt = $conn->prepare("INSERT INTO support_requests (name, email, reason, message) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $email, $reason, $message);

    if ($stmt->execute()) {
        echo "Your request has been submitted successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
