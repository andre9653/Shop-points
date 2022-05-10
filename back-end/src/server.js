const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddleware');
require('dotenv').config();

const app = express();
const { PORT, HOST } = process.env;
app.use(express.json());
app.use(errorMiddleware);

const server = app.listen(PORT, HOST, () => {
  console.log(`Start server on PORT ${PORT}`);
});

module.exports = server;
