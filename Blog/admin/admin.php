<?php
session_start();
include 'functions.php'; // Incluir o arquivo com as funções CRUD

// Verificação de sessão (somente admin pode acessar)
if (!isset($_SESSION['admin_logged_in'])) {
    header("Location: login.php");
    exit;
}

// Verificar se a ação é "Criar", "Atualizar" ou "Deletar"
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['create'])) {
        // Criar post
        createPost($_POST['title'], $_POST['content'], $_POST['author']);
    } elseif (isset($_POST['update'])) {
        // Atualizar post
        updatePost($_POST['id'], $_POST['title'], $_POST['content'], $_POST['author']);
    } elseif (isset($_POST['delete'])) {
        // Deletar post
        deletePost($_POST['id']);
    }
}

// Verificar se o id do post é passado para edição
$post = null;
if (isset($_GET['edit'])) {
    $post = getPostById($_GET['edit']);
}

// Listar todos os posts
$posts = getAllPosts();
?>

<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Painel de Administração</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<div class="container mt-5">
    <h2>Painel de Administração - Blog</h2>

    <!-- Formulário para Criar ou Editar Post -->
    <form action="admin.php" method="POST">
        <h3><?php echo $post ? 'Editar Post' : 'Criar Novo Post'; ?></h3>
        <input type="hidden" name="id" value="<?php echo $post ? $post['id'] : ''; ?>">

        <div class="mb-3">
            <label for="title" class="form-label">Título</label>
            <input type="text" class="form-control" id="title" name="title" value="<?php echo $post ? $post['title'] : ''; ?>" required>
        </div>

        <div class="mb-3">
            <label for="content" class="form-label">Conteúdo</label>
            <textarea class="form-control" id="content" name="content" rows="5" required><?php echo $post ? $post['content'] : ''; ?></textarea>
        </div>

        <div class="mb-3">
            <label for="author" class="form-label">Autor</label>
            <input type="text" class="form-control" id="author" name="author" value="<?php echo $post ? $post['author'] : ''; ?>" required>
        </div>

        <button type="submit" name="<?php echo $post ? 'update' : 'create'; ?>" class="btn btn-primary">
            <?php echo $post ? 'Atualizar Post' : 'Criar Post'; ?>
        </button>
    </form>

    <hr>

    <!-- Lista de Posts -->
    <h3>Todos os Posts</h3>
    <table class="table">
        <thead>
            <tr>
                <th>#</th>
                <th>Título</th>
                <th>Autor</th>
                <th>Data de Criação</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($posts as $post) : ?>
                <tr>
                    <td><?php echo $post['id']; ?></td>
                    <td><?php echo $post['title']; ?></td>
                    <td><?php echo $post['author']; ?></td>
                    <td><?php echo $post['created_at']; ?></td>
                    <td>
                        <a href="admin.php?edit=<?php echo $post['id']; ?>" class="btn btn-warning btn-sm">Editar</a>
                        <form action="admin.php" method="POST" style="display:inline;">
                            <input type="hidden" name="id" value="<?php echo $post['id']; ?>">
                            <button type="submit" name="delete" class="btn btn-danger btn-sm">Deletar</button>
                        </form>
                    </td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>
