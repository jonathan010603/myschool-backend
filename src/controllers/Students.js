/* eslint-disable class-methods-use-this */
import dotenv from 'dotenv';
import mysql from 'mysql';
dotenv.config();

const con = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

class Students {
  constructor() {
    this.checkConnection();
  }

  checkConnection() {
    con.connect((err) => {
      if (err) throw err;
      console.log('Connected');
    });
  }

  getAll(req, res) {
    con.query('SELECT * FROM Students', (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  }

  getByStudentID(req, res) {
    con.query(`SELECT * FROM Students WHERE StudentID=${req.params.StudentID}`, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  }
}

export default new Students();
