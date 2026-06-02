<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

$ADMIN_PASSWORD = 'ds-admin-2026';

function authenticate() {
    global $ADMIN_PASSWORD;
    $authHeader = isset($_SERVER['HTTP_AUTHORIZATION']) ? $_SERVER['HTTP_AUTHORIZATION'] : '';
    
    if (strpos($authHeader, 'Bearer ') === 0) {
        $token = substr($authHeader, 7);
        if ($token === $ADMIN_PASSWORD) {
            return true;
        }
    }
    
    http_response_code(401);
    echo json_encode(['error' => 'Unauthorized']);
    exit;
}
