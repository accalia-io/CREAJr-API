import Sequelize from 'sequelize';

import Course from '../app/models/Course';
import Institution from '../app/models/Institution';
import InstitutionCourse from '../app/models/InstitutionCourse';
import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [Course, Institution, InstitutionCourse, User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
