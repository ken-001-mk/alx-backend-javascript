const express = require('express');
const countStudents = require('./3-read_file_async');
const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
  .then((data) => {
    res.send(data);
  })
  .catch((error) => {
    res.send(error.message);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
