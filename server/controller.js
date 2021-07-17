var Student = require('../db/Student.js');

const controller = {
  students: {
    getStudents: function (req, res) {
      // TODO: add your code here to fetch all students
      Student.find()
      .then(result => res.status(200).send(result))
      .catch(err => res.status(404).send(err))

    },
    postStudent: function (req, res) {
      // TODO: add your code here to add a new student
      Student.create(req.body)
      .then(result => res.status(200).send('Student posted!!'))
      .catch(err => res.status(404).send(err))
    },
    updateName: function (req, res) {
      // TODO: add your code here to update a student's name

    }
  }
};

module.exports = controller