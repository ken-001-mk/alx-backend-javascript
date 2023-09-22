
import router from '.routes';
const express = require('express');
const app = express();

// Use the router instance
app.use('/', router);

// set the port of our application
const port = 1245;

// start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
export default app;