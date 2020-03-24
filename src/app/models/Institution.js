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

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Course, {
      through: models.InstitutionCourse,
      as: 'courses',
      foreignKey: 'institution_id',
    });
  }
}

export default Institution;
