<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require_once __DIR__ . "/config.php";

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
