const casual = require('casual');
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.bulkInsert(
        'Users',
        [
          {
            name: casual.name,
            email: casual.email,
            password: await bcrypt.hash('12345678', 10),
            role: 'user',
            createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
            updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          },
          {
            name: casual.name,
            email: casual.email,
            password: await bcrypt.hash('12345678', 10),
            role: 'admin',
            createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
            updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          },
        ],
        {},
      );
    } catch (error) {
      console.log(error);
    }
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
