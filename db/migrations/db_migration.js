const db = require('../db_pool');
const carSchema = require('./car_schema');

async function runDbMigrations() {
    console.log('Beginning connection...');

    const client = await db.connect();

    try {
        await client.query('BEGIN');

        await client.query(carSchema);

        await client.query('COMMIT');
    } catch (e) {
        await client.query('ROLLBACK');

        console.log('DB migration failed!');

        throw e;
    } finally {
        client.release();
    }
}

module.exports = runDbMigrations;