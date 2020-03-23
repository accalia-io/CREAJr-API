import Sequelize, { Model } from 'sequelize';

class Institution extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        city: Sequelize.STRING,
        zone: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Institution;
