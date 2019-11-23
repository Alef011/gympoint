import Sequelize, { Model } from 'sequelize';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        height: Sequelize.NUMBER,
        weight: Sequelize.NUMBER,
        age: Sequelize.NUMBER,
      },
      {
        sequelize,
      }
    );
  }
}

export default Student;
