const carSchema = `
    CREATE SCHEMA IF NOT EXISTS cars;

    CREATE TABLE IF NOT EXISTS cars.brand (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL
    );
    
    CREATE TABLE IF NOT EXISTS cars.model (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        year INT,
        fuel_type VARCHAR(255) NOT NULL,
        brand_id INT REFERENCES cars.brand(id) ON DELETE CASCADE
    );
`;

module.exports = carSchema;