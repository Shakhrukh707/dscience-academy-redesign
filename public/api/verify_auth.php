<?php
require_once 'config.php';
authenticate();
echo json_encode(['success' => true]);
