const db = require('../db_pool');
const carSchema = require('./car_schema');

async function runDbMigrations() {
    console.log('Beginning connection...');

    const client = await db.connect();

    try {
        await client.query('BEGIN'); // begin transaction

        await client.query(carSchema); // creating car schema

        await client.query('COMMIT'); // commit transaction

        console.log('...');
    } catch (e) {
        await client.query('ROLLBACK'); // rollback transaction

        console.log('DB migration failed!');

        throw e;
    } finally {
        client.release();
    }
}

module.exports = runDbMigrations;