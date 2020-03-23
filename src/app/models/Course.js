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
  }
}

export default Course;
