import Sequelize, { Model } from 'sequelize';

class InstitutionCourse extends Model {
  static init(sequelize) {
    super.init(
      {
        institution_id: Sequelize.INTEGER,
        course_id: Sequelize.INTEGER,
      },
      {
        sequelize,
        tableName: 'institutions_courses',
      }
    );

    return this;
  }
}

export default InstitutionCourse;
