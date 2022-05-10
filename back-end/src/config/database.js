require('dotenv').config();

module.exports = {
  development: {
    dialect: process.env.DATABASE_DIALECT,
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: parseInt(process.env.DATABASE_PORT, 10),
    // desabilitar logging em produção
    logging: false,
    define: {
      timestamp: true,
      underscored: true,
    },
  },
};
