const db = require('../db_pool');
const createCarSchema = require('./create_car_schema');

let debug = null;

async function runDbMigrations() {
    console.log('BEGIN DB MIGRATION');

    const client = await db.connect();

    try {
        await client.query('BEGIN'); // begin transaction

        debug = await client.query(createCarSchema); // creating car schema

        await client.query('COMMIT'); // commit transaction

        console.log('END DB MIGRATION');
    } catch (e) {
        await client.query('ROLLBACK'); // rollback transaction

        console.log('DB migration failed!');

        throw e;
    } finally {
        client.release();
    }
}

module.exports = runDbMigrations;