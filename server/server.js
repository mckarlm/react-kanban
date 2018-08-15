const express = require('express');
const bodyparser = require('body-parser');
const routes = require('./routes')

const PORT = process.env.PORT || 4020;

const server = express();

server.use(bodyparser.json());

server.use('/api', routes);

server.get('/', (req, res) => {
  res.send('wiggity woo');
});

server.get('*', (req, res) => {
  return res.status(404).json({ message: `Unable to fulfill the request for ${req.originalUrl}` })
})

server.listen(PORT, (req, res) => {
  process.stdout.write(`Connected to : ${PORT}`);
});