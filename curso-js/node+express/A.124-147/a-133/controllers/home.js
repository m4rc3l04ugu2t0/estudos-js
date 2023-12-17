exports.homePage = (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Formulário</title>
</head>
<body>

    <form action="/" method="post">
        <label for="campo">Campo:</label>
        <input type="text" id="campo" name="campo" required>
        <br>
        <input type="submit" value="Enviar">
    </form>

</body>
</html>`);
};

exports.managePublication = (req, res) => {
  res.send('router home');
};

exports.manageContact = (req, res) => {};
