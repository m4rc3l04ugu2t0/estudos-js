const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (resquest, response) => {
  response.send(`
    <!DOCTYPE html>
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

app.listen(3000, () => {
  console.log('http://localhost:3000');
});

app.post('/', (resquest, response) => {
  console.log('post', resquest.body);
  response.send(resquest.body.campo);
});

app.get('/test/:id?/:nameUser?', (resquest, response) => {
  console.log('get', resquest.params);
  console.log(resquest.query, 'query');
  response.send('test');
});

console.log('hello word');
