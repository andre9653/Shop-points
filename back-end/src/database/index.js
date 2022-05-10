const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const environment = process.env.NODE_ENV;
const connection = new Sequelize(dbConfig[environment]);

module.exports = connection;
