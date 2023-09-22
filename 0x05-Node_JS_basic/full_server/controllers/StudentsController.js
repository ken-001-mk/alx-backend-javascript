import { readDatabase } from  '../utils.js';

export class StudentController {
  static async getAllStudents(req, res) {
    try {
      const path = process.argv[2];
      const students = await readDatabase(path);
      const studentsList = object.keys(students).sort((a, b) =>
        a.localeCompare(b, undefined, { sensitivity: 'base' })
      );
      const studentsNumber = studentsList.length;
      res.status(200).send(`Number of students: ${studentsNumber}. List: ${studentsList.join(', ')}`);
    } catch (err) {
        res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const path = process.argv[2];
      const students = await readDatabase(path);
      const major = req.params.major;
      if (students[major]) {
        const studentsNumber = students[major].length;
        res.status(200).send(`List: ${students[major].join(', ')}. Number of students in ${major}: ${studentsNumber}`);
      } else {
        throw new Error();
      }
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }
}
