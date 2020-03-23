import Sequelize from 'sequelize';

import Course from '../app/models/Course';
import Institution from '../app/models/Institution';

import databaseConfig from '../config/database';

const models = [Course, Institution];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
    // .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
