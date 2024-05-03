require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const runDbMigrations = require('./db/migrations/db_migration');

const app = express();

async function start() {
    const port = process.env.PORT || 5000;

    await runDbMigrations();

    app.listen(port, () => {
        console.log(`Server running on: http://localhost:${port}`);
    });

    app.use(bodyParser.json());

    app.use('/db', userRoutes);

    app.get('/', (req, res) => res.send('HELLO FROM HOMEPAGE'));
}

start();