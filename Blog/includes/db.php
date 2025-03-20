<?php
// Arquivo de Conexão com Banco de Dados
$host = 'localhost';  // Pode ser '127.0.0.1' ou o IP do seu banco
$dbname = 'blog';     // Nome do banco de dados
$username = 'root';   // Usuário do banco de dados
$password = '';       // Senha do banco de dados

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // Exibe erros de forma amigável
} catch (PDOException $e) {
    echo 'Erro ao conectar ao banco de dados: ' . $e->getMessage();
    exit;
}
?>


CREATE DATABASE blog;

USE blog;

-- Tabela para posts
CREATE TABLE posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  author VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

