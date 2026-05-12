<?php
$requestPath = parse_url($_SERVER['REQUEST_URI'] ?? '', PHP_URL_PATH);
$segments = array_values(array_filter(explode('/', trim($requestPath, '/'))));
$blogIndex = array_search('blog', $segments, true);
$slug = $blogIndex === false ? '' : ($segments[$blogIndex + 1] ?? '');
$safeSlug = preg_replace('/[^a-zA-Z0-9-]/', '', $slug);
$postPath = __DIR__ . '/../frontend/dist/blog/' . $safeSlug . '/index.html';

if ($safeSlug && is_file($postPath)) {
    header('Content-Type: text/html; charset=UTF-8');
    readfile($postPath);
    exit;
}

$spaPath = __DIR__ . '/../frontend/dist/index.html';

if (is_file($spaPath)) {
    header('Content-Type: text/html; charset=UTF-8');
    readfile($spaPath);
    exit;
}

http_response_code(404);
echo 'Blog post not found.';
