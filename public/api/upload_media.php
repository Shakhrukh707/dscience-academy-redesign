<?php
require_once 'config.php';
authenticate();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

if (!isset($_FILES['file']) || $_FILES['file']['error'] !== UPLOAD_ERR_OK) {
    http_response_code(400);
    echo json_encode(['error' => 'No file uploaded or upload error']);
    exit;
}

$file = $_FILES['file'];
$uploadDir = '../media/uploads/';

if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

// Basic security check (only images)
$allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'];
if (!in_array($file['type'], $allowedTypes)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid file type. Only images allowed.']);
    exit;
}

// Generate unique filename
$ext = pathinfo($file['name'], PATHINFO_EXTENSION);
$filename = uniqid('img_') . '.' . $ext;
$targetPath = $uploadDir . $filename;

if (move_uploaded_file($file['tmp_name'], $targetPath)) {
    echo json_encode([
        'success' => true,
        'url' => '/media/uploads/' . $filename
    ]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to move uploaded file']);
}
