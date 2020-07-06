require('dotenv').config();
const express = require('express');
const massive = require('massive');
const controller = require('./controller');

const {SERVER_PORT, DB_URI} = process.env;

const app = express();

app.use(express.json());

massive({
    connectionString: DB_URI,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set('db', db);
    console.log('DB is connected');
}).catch(err => console.log(err));

app.get('/api/inventory', controller.getInventory);
app.get('/api/inventory/:id', controller.getItem);
app.post('/api/inventory', controller.postInventory);
app.delete('/api/inventory/:id', controller.deleteInventory);
app.put('/api/inventory/:id', controller.putInventory);

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));