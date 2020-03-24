import Sequelize, { Model } from 'sequelize';

class Course extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Institution, {
      through: models.InstitutionCourse,
      as: 'institutions',
      foreignKey: 'course_id',
    });
  }
}

export default Course;
