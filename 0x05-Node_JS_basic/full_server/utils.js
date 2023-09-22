import fs from 'fs';

export const readDatabase = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(Error('Cannot load the database'));
    }
    if (data) {
      const students = {};
      const fields = {};
      const lines = data.split('\n');
      let i = 0;
      for (const line of lines) {
      if (line) {
        const student = line.split(',');
        if (!students[student[3]]) {
        students[student[3]] = [];
        }
        students[student[3]].push(student[0]);
        if (!fields[student[3]]) {
        fields[student[3]] = 0;
        }
        fields[student[3]] += 1;
        i += 1;
      }
      }
      console.log(`Number of students: ${i}`);
      for (const field in fields) {
      if (field) {
        console.log(`Number of students in ${field}: ${fields[field]}. List: ${students[field].join(', ')}`);
      }
      }
    }
    resolve();
    });
  });
}