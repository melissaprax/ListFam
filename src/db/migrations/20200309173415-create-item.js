"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Items", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      purchased: {
        type: Sequelize.BOOLEAN
      },
      listId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Lists",
          key: "id",
          as: "listId"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Items");
  }
};
