'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.bulkInsert('matriculas', [
      {
        estudante_id: 13,
        curso_id: 1,
        status: 'matriculado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        estudante_id: 14,
        curso_id: 2,
        status: 'matriculado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        estudante_id: 15,
        curso_id: 3,
        status: 'matriculado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        estudante_id: 16,
        curso_id: 4,
        status: 'matriculado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('matriculas', null, {});
     
  }
};
