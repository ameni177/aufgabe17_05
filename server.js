const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.post('/navigate', (req, res) => {
    const page = req.body.page;
    switch(page) {
        case 'contact':
            res.sendFile(path.join(__dirname, 'contact.html'));
            break;
        case 'about':
            res.sendFile(path.join(__dirname, 'about.html'));
            break;
        case 'impressum':
            res.sendFile(path.join(__dirname, 'impressum.html'));
            break;
        case 'privacy':
            res.sendFile(path.join(__dirname, 'privacy.html'));
            break;
        default:
            res.sendFile(path.join(__dirname, 'home.html'));
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
