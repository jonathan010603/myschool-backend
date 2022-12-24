/* eslint-disable class-methods-use-this */
import StudentModel from '../models/Student';
import sequelize from '../connection';

class Students {
  constructor() {
    this.checkConnection();
  }

  async checkConnection() {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }

  async getAllStudents(req, res) {
    try {
      const students = await StudentModel.findAll({
        attributes: [
          'studentID', 'classroomID',
          'studentName', 'studentLastName',
          'studentBirthDate', 'studentPhone',
          'studentCPF', 'studentEmail',
          'studentUsername', 'studentShift'
        ]
      });
      res.json(students);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal error");
    }
  }

  async getByStudentID(req, res) {
    try {
      const students = await StudentModel.findAll(
        {
          where: { studentID: req.params.id },
          attributes: [
            'studentID', 'classroomID',
            'studentName', 'studentLastName',
            'studentBirthDate', 'studentPhone',
            'studentCPF', 'studentEmail',
            'studentUsername', 'studentShift'
          ]
        }
      );
      res.json(students);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal error");
    }
  }

  async createStudent(req, res) {
    try {
      await StudentModel.create({
        classroomID: req.body.classroom_id,
        studentName: req.body.student_name,
        studentLastName: req.body.student_last_name,
        studentBirthDate: req.body.student_birth_date,
        studentPhone: req.body.student_phone,
        studentCPF: req.body.student_cpf,
        studentEmail: req.body.student_email,
        studentUsername: req.body.student_username,
        studentHash: req.body.student_hash,
        studentShift: req.body.student_shift
      }, { fields: ['shift1', 'shift2', 'shift3'] });
      res.status(201).send("Student added successfully.");
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal error");
    }
  }
}

export default new Students();
