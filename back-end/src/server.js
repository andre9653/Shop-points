const express = require('express');
require('dotenv').config();

const app = express();
const { PORT, HOST } = process.env;
app.use(express.json());

const server = app.listen(PORT, HOST, () => {
  console.log(`Start server on PORT ${PORT}`);
});

module.exports = server;
