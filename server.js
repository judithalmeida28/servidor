const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola Alumnos del 9B');
});

server.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto: ${port}`);
});
