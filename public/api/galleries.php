<?php
header('Content-Type: application/vnd.api+json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

$metaFile = __DIR__ . '/galleries-meta.json';
$meta = json_decode(file_get_contents($metaFile), true);

$galleryId = isset($_GET['id']) ? $_GET['id'] : null;

$allowedIds = array_column($meta['galleries'], 'id');

function scanGalleryImages($galleryDir, $sortByName = false) {
    $images = [];
    $allowedExtensions = ['jpg', 'jpeg', 'png', 'webp'];

    if (!is_dir($galleryDir)) {
        return $images;
    }

    $files = scandir($galleryDir);
    foreach ($files as $file) {
        if ($file === '.' || $file === '..') {
            continue;
        }
        $ext = strtolower(pathinfo($file, PATHINFO_EXTENSION));
        if (in_array($ext, $allowedExtensions)) {
            $images[] = $file;
        }
    }

    if ($sortByName) {
        natsort($images);
        $images = array_values($images);
    } else {
        usort($images, function ($a, $b) use ($galleryDir) {
            return filemtime("$galleryDir/$b") - filemtime("$galleryDir/$a");
        });
    }

    return $images;
}

function buildGalleryResource($galleryMeta, $images) {
    return [
        'type' => 'galleries',
        'id' => $galleryMeta['id'],
        'attributes' => [
            'name' => $galleryMeta['name'],
            'title' => $galleryMeta['title'],
            'link' => $galleryMeta['link'],
            'description' => $galleryMeta['description'],
            'url' => $galleryMeta['url'],
            'images' => $images
        ]
    ];
}

$sortByNameIds = ['personal-branding'];
$imgBase = realpath(__DIR__ . '/../img/gallery');

if ($galleryId) {
    if (!in_array($galleryId, $allowedIds)) {
        http_response_code(404);
        echo json_encode(['errors' => [['status' => '404', 'title' => 'Not Found']]]);
        exit;
    }

    $galleryMeta = null;
    foreach ($meta['galleries'] as $g) {
        if ($g['id'] === $galleryId) {
            $galleryMeta = $g;
            break;
        }
    }

    $dirName = basename($galleryMeta['url']);
    $galleryDir = $imgBase . '/' . $dirName;
    $images = scanGalleryImages($galleryDir, in_array($galleryId, $sortByNameIds));

    echo json_encode(['data' => buildGalleryResource($galleryMeta, $images)]);
} else {
    $data = [];
    foreach ($meta['galleries'] as $galleryMeta) {
        $dirName = basename($galleryMeta['url']);
        $galleryDir = $imgBase . '/' . $dirName;
        $images = scanGalleryImages($galleryDir, in_array($galleryMeta['id'], $sortByNameIds));
        $data[] = buildGalleryResource($galleryMeta, $images);
    }
    echo json_encode(['data' => $data]);
}
