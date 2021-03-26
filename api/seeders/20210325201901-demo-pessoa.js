'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Pessoas', [
      {
        nome: 'samuel pereira costa',
        ativo: true,
        email: 'samuel@samuel.com',
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'maria da silva',
        ativo: false,
        email: 'maria@marai.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'joelhice machado',
        ativo: true,
        email: 'jo@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'mariana rui barbosa',
        ativo: true,
        email: 'mari@uol.com.br',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Johm macduff ',
        ativo: false,
        email: 'macjo@terra.com.br',
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Pessoas', null, {});

  }
};
