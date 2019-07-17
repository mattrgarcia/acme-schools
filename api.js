const {
  models
} = require('./db');
const express = require('express');
const app = express.Router();

app.get('/schools', async (req, res, next) => {
  try {
    res.send(await models.School.findAll());
  } catch (ex) {
    next(ex)
  }
});

app.get('/schools/:id', async (req, res, next) => {
  try {
    res.send(await models.School.findOne({
      where: {
        id: req.params.id
      }
    }))
  } catch (ex) {
    next(ex)
  }
});

app.get('/students', async (req, res, next) => {
  try {
    res.send(await models.Student.findAll());
  } catch (ex) {
    next(ex)
  }
});


// app.post('/', async (req, res, next) => {
//   try {
//     await models.Student.create({
//       where: {
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         email: req.body.email,
//         gpa: req.body.gpa
//       }
//     })
//
//   } catch (ex) {
//     next(ex)
//   }
// })

module.exports = app;
