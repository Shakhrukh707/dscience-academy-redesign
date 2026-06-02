<?php
require_once 'config.php';
authenticate();

$dataFile = '../data/news.json';

// Create data directory if it doesn't exist
if (!is_dir('../data')) {
    mkdir('../data', 0777, true);
}

// Load existing data
$news = [];
if (file_exists($dataFile)) {
    $news = json_decode(file_get_contents($dataFile), true);
    if (!is_array($news)) $news = [];
}

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    if (!$input || !isset($input['id'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid data']);
        exit;
    }

    $id = $input['id'];
    $isNew = true;
    
    // Check if updating
    foreach ($news as $key => $item) {
        if ($item['id'] === $id) {
            $news[$key] = $input;
            $isNew = false;
            break;
        }
    }
    
    // If new, prepend to array
    if ($isNew) {
        array_unshift($news, $input);
    }
    
    file_put_contents($dataFile, json_encode($news, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    echo json_encode(['success' => true, 'action' => $isNew ? 'created' : 'updated']);

} else if ($method === 'DELETE') {
    $id = isset($_GET['id']) ? $_GET['id'] : '';
    if (!$id) {
        http_response_code(400);
        echo json_encode(['error' => 'Missing ID']);
        exit;
    }
    
    $initialCount = count($news);
    $news = array_values(array_filter($news, function($item) use ($id) {
        return $item['id'] !== $id;
    }));
    
    if (count($news) === $initialCount) {
        http_response_code(404);
        echo json_encode(['error' => 'Not found']);
        exit;
    }
    
    file_put_contents($dataFile, json_encode($news, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    echo json_encode(['success' => true, 'action' => 'deleted']);

} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
