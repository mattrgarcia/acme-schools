const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/acme-schools');

const School = db.define('school', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  name: Sequelize.STRING,
  imageURL: Sequelize.STRING
})

const Student = db.define('student', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  gpa: Sequelize.FLOAT
});

Student.belongsTo(School);
School.hasMany(Student);

const syncAndSeed = async () => {
  await db.sync({
    force: true
  })
  await School.create({
    name: 'Cal Poly'
  });
  await School.create({
    name: 'USC'
  });
  await Student.create({
    firstName: 'Matt',
    lastName: 'Garcia',
    email: 'mattgarcia@gmail.com',
    gpa: 3.7
  });
}


module.exports = {
  syncAndSeed,
  models: {
    School,
    Student
  }
}