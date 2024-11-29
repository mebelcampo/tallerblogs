'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('blogs', [
      {
        titulo: 'rosa',
        nombre: 'lenguaje para creación de backend en js',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'tulipanes',
        nombre: 'ORM para nodejs',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('blogs', null, {});
  }
};
