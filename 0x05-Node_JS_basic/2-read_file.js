/**
 * @description - Function that reads a CSV file and prints the number of students by field.
 * @param {string} path
 * 
 */
const fs = require('fs');
const csv = require('csv-parser');


function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf-8');
        const students = {};
        const fields = {};

        csv({skipEmptyLines: true})
            .on('data', (data) => {
                if (data.field !== 'firstname' && data.field !== 'field') {
                    if (students[data.field]) {
                        students[data.field].push(data.firstname);
                    } else {
                        students[data.field] = [data.firstname];
                    }
                }
                if (data.field) {
                    if (fields[data.field]) {
                        fields[data.field] += 1;
                    } else {
                        fields[data.field] = 1;
                    }
                }
            });
            on('end', () => {
                console.log(`Number of students: ${Object.keys(students).length}`);
                for (const field in fields) {
                    if (field) {
                        console.log(`Number of students in ${field}: ${fields[field]}. List: ${students[field].join(', ')}`);
                    }
                }
            });
            csv.write(data);

    } catch (err) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;