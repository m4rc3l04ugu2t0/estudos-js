const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.send('hello word');
});

app.get('/contact', (request, response) => {
  response.send(`<!DOCTYPE html>
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
</html>
`);
});

app.listen(3001, () => {
  console.log('running on port 3001,  http://localhost:3001');
});

app.listen(3002, () => {
  console.log('running contact, port 3002');
});

app.post('/', (request, response) => {
  response.send('form received');
});
