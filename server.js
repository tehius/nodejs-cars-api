const fs = require('fs');
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/routes');
const runDbMigrations = require('./db/migrations/db_migration');

const app = express();
app.use(express.static(`${__dirname}/public`));

async function start() {
    const port = process.env.PORT || 5000;

    await runDbMigrations();

    app.listen(port, () => {
        console.log(`Server running on: http://localhost:${port}/index.html`);
    });

    app.use(bodyParser.json());

    app.use('/db', userRoutes);

    app.get('/', (req, res) => {
        fs.readFile('index.html', function(err, html){
            if (err) {
                throw err;
            } else {
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write(html);
                res.end();
            }
        });
    });
}
start();