<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Autenticação de login (Exemplo Simples)
    $admin_username = 'admin';
    $admin_password = 'admin123';

    if ($_POST['username'] == $admin_username && $_POST['password'] == $admin_password) {
        $_SESSION['admin_logged_in'] = true;
        header("Location: admin.php");
        exit;
    } else {
        $error_message = "Usuário ou senha inválidos.";
    }
}
?>

<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>

<div>
    <h2>Login de Administrador</h2>
    <form method="POST" action="login.php">
        <div>
            <label for="username">Nome de usuário:</label>
            <input type="text" id="username" name="username" required>
        </div>

        <div>
            <label for="password">Senha:</label>
            <input type="password" id="password" name="password" required>
        </div>

        <?php if (isset($error_message)) : ?>
            <div style="color: red;">
                <?php echo $error_message; ?>
            </div>
        <?php endif; ?>

        <button type="submit">Entrar</button>
    </form>
</div>

</body>
</html>
