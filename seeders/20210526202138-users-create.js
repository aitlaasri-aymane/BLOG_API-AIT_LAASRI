'use strict';

const { random } = require('faker');
const faker = require('faker');
const users = [...Array(20)].map((user) => (
  {
    email: faker.internet.email(),
    username: faker.internet.userName(),
    password: faker.internet.password(8),
    role: faker.helpers.randomize(['guest', 'admin', 'author']),
    createdAt: new Date(),
    updatedAt: new Date()
  }
))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('users', users, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkInsert('users', null, {});
  }
};
