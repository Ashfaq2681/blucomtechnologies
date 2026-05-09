<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// DB Connection
$conn = new mysqli("localhost", "blucdagn_admin", ")&]x;#^F,ND7", "blucdagn_contacts");
if ($conn->connect_error) {
    die(json_encode(["error" => "DB Connection failed: " . $conn->connect_error]));
}

// Decode JSON
$data = json_decode(file_get_contents("php://input"), true);

// Debug log
file_put_contents('debug_log.txt', date('Y-m-d H:i:s') . " " . print_r($data, true) . "\n", FILE_APPEND);

// Collect fields
$projectName = $data['projectName'] ?? '';
$companyName = $data['companyName'] ?? '';
$position = $data['position'] ?? '';
$category = $data['category'] ?? '';
$services = isset($data['services']) ? json_encode($data['services']) : '[]';
$goals = isset($data['goals']) ? json_encode($data['goals']) : '{}';
$budget = intval($data['budget'] ?? 0);
$contactNumber = $data['contactNumber'] ?? '';
$email = $data['email'] ?? '';

// Validate required fields
if (!$projectName || !$companyName || !$contactNumber || !$email) {
    echo json_encode(["error" => "Required fields missing"]);
    exit;
}

// Prepare & execute insert
$stmt = $conn->prepare("
    INSERT INTO customer_queries 
    (project_name, company_name, position, category, services, goals, budget, contact_number, email)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
");
$stmt->bind_param(
    "ssssssiss",
    $projectName, $companyName, $position, $category, $services, $goals, $budget, $contactNumber, $email
);

if ($stmt->execute()) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["error" => $stmt->error]);
}

$stmt->close();
$conn->close();
?>