module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('institutions', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      zone: {
        type: Sequelize.ENUM(
          'LESTE',
          'NORTE',
          'OESTE',
          'SSA',
          'SUDOESTE',
          'SUL'
        ),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('institutions');
  },
};
