const http = require('http');
const fs = require('fs');
const { countStudents } = require('./3-read_file_async');
const PORT = 1245;

const app = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the list of our students\n');
        countStudents(process.argv[2])
        .then((data) => {
            res.end(data);
        })
        .catch((error) => {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end(error.message);
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Invalid request');
    }
});

app.listen(PORT);

module.exports = app;
