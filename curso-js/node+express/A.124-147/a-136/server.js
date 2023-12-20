const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário Simples</title>
</head>
<body>

    <h1>Formulário Simples</h1>

    <form action="/" method="post">
        <!-- Campo de texto para o nome -->
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required>

        <br>

        <!-- Campo de e-mail -->
        <label for="email"Corno>E-mail:</label>
        <input type="email" id="email" name="email" required>

        <br>

        <!-- Botão de envio -->
        <button type="submit">Enviar</button>
    </form>

</body>
</html>
`);
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('opaaaaaa');
});

app.get('/contact/:id?/:param?', (req, res) => {
  console.log(req.query, 'query');
  console.log(req.params);
  res.send('contact');
});

app.listen(3003, () => {
  console.log('http://localhost:3003');
});
