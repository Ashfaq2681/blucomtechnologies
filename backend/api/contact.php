<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// MySQL credentials
$servername = "localhost";
$username = "blucdagn_admin";
$password = ")&]x;#^F,ND7";
$dbname = "blucdagn_contact_form";

// Get JSON input
$data = json_decode(file_get_contents("php://input"), true);

// Validate required fields
$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$phone = trim($data['phone'] ?? '');
$company = trim($data['company'] ?? '');
$title = trim($data['title'] ?? '');
$message = trim($data['message'] ?? '');

if (!$name || !$email || !$message) {
    echo json_encode(["error" => "All required fields must be filled"]);
    exit;
}

// Connect to MySQL
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo json_encode(["error" => "Database connection failed: " . $conn->connect_error]);
    exit;
}

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO contacts (name, email, phone, company, title, message) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssss", $name, $email, $phone, $company, $title, $message);

// Execute
if ($stmt->execute()) {
    echo json_encode(["success" => "Message saved successfully"]);
} else {
    echo json_encode(["error" => "Failed to save message"]);
}

$stmt->close();
$conn->close();
?>