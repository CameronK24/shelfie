const express = require('express');
const controller = require('./controller');

const app = express();

app.use(express.json());

app.listen(5050, () => console.log(`Listening on port 5050`));