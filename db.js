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
  const calPoly = await School.create({name: 'Cal Poly'});
  const usc = await School.create({name: 'USC'});
  const ucla = await School.create({name: 'UCLA'});
  const hartnellCollege = await School.create({name: 'Hartnell College'});

  await Student.create({
    firstName: 'Matt',
    lastName: 'Garcia',
    email: 'mattgarcia@gmail.com',
    gpa: 3.7,
    schoolId: usc.id
  });

  await Student.create({
    firstName: 'Peter',
    lastName: 'Parker',
    email: 'imnotspiderman@gmail.com',
    gpa: 4.0,
    schoolId: calPoly.id
  });
}


module.exports = {
  syncAndSeed,
  models: {
    School,
    Student
  }
}
