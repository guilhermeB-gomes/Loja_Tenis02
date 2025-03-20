<?php
// Conexão com o banco de dados
include 'db.php'; // Inclua a conexão com o banco de dados aqui

// Função para Criar um Post
function createPost($title, $content, $author) {
    global $pdo;
    $sql = "INSERT INTO posts (title, content, author) VALUES (:title, :content, :author)";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':title', $title);
    $stmt->bindParam(':content', $content);
    $stmt->bindParam(':author', $author);
    $stmt->execute();
}

// Função para Ler todos os Posts
function getAllPosts() {
    global $pdo;
    $sql = "SELECT * FROM posts ORDER BY created_at DESC";
    $stmt = $pdo->query($sql);
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

// Função para Ler um Post por ID
function getPostById($id) {
    global $pdo;
    $sql = "SELECT * FROM posts WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    return $stmt->fetch(PDO::FETCH_ASSOC);
}

// Função para Atualizar um Post
function updatePost($id, $title, $content, $author) {
    global $pdo;
    $sql = "UPDATE posts SET title = :title, content = :content, author = :author WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->bindParam(':title', $title);
    $stmt->bindParam(':content', $content);
    $stmt->bindParam(':author', $author);
    $stmt->execute();
}

// Função para Deletar um Post
function deletePost($id) {
    global $pdo;
    $sql = "DELETE FROM posts WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
}
?>
