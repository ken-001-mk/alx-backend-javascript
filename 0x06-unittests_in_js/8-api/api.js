const express = require('express');

const app = express();

app.get('/api', (req, res) => {
    res.send('Welcome to the payment API system!');
});

const port = 7865;
app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
});