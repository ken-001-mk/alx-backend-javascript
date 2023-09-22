const express = require('express');
/**
 * Create an Express server instance
 */
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

const port = 1245;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;