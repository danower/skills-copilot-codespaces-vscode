// Create web server
const express = require('express');
const app = express();
const port = 3000;
app.get('/comments', (req, res) => {
    res.send('Comments');
});
app.listen(port, () => {
    console.log(`Comments service listening at http://localhost:${port}`);
});